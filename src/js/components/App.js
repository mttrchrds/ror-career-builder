import React from 'react';
import h from '../helpers';
import css from '../../css/components/App.css';
import Overlay from './Overlay';
import Sidebar from './Sidebar';
import Modal from './Modal';

class App extends React.Component {

  constructor(props) {
    super(props);

    // Bind functions early
    this.clickOverlay = this.clickOverlay.bind(this);
    this.updateSidebarVisibility = this.updateSidebarVisibility.bind(this);
    this.updateOverlayVisibility = this.updateOverlayVisibility.bind(this);
    this.gaChangeCareer = this.gaChangeCareer.bind(this);
    this.gaCareerSelected = this.gaCareerSelected.bind(this);
    this.loadCareers = this.loadCareers.bind(this);
    this.updateModalVisibility = this.updateModalVisibility.bind(this);
    this.updateModalContent = this.updateModalContent.bind(this);

    // Initialise state of app
    this.state = {
      careers: {},
      sidebar: {
        visible: false,
      },
      overlay: {
        visible: false,
      },
      modal: {
        visible: false,
        contentTitle: '',
        contentBody: '',
      },
    };
  }

  componentDidMount() {
    // Load careers into state from json
    this.loadCareers();
  }

  // Load careers into state
  loadCareers() {
    h.getJSON('/json/careers.json', (result) => {
      this.setState({
        careers: result,
      });
    }, (error) => {
      console.warn(error);
    });
  }

  // Hide/show Sidebar, param is boolean
  updateSidebarVisibility(status) {
    this.state.sidebar.visible = status;
    this.setState({
      sidebar: this.state.sidebar,
    });
  }

  // Hide/show Overlay, param is boolean
  updateOverlayVisibility(status) {
    this.state.overlay.visible = status;
    this.setState({
      overlay: this.state.overlay,
    });
  }

  // Hide/show Modal, param is boolean
  updateModalVisibility(status) {
    this.state.modal.visible = status;
    this.setState({
      modal: this.state.modal,
    });
  }

  // Update contents of modal
  updateModalContent(title, content) {
    this.state.modal.contentTitle = title;
    this.state.modal.contentBody = content;
    this.setState({
      modal: this.state.modal,
    });
  }

  // Overlay background is clicked
  clickOverlay() {
    this.updateModalVisibility(false);
    this.updateSidebarVisibility(false);
    this.updateOverlayVisibility(false);
  }

  /*
  * -----------------------
  * Google Analytics Events
  * -----------------------
  */

  // Create category/value to determine where race was selected from i.e. home, button, breadcrumb
  // Again, needs to be duplicated on home page
  gaChangeCareer(changeType) {
    h.gaEvent('Career changed', changeType);
  }

  // Google Analytics event after selecting career
  gaCareerSelected(careerKey) {
    h.gaEvent('Career selected', this.state.careers[careerKey].name);
    h.gaEvent('Class selected', this.state.careers[careerKey].class);
    h.gaEvent('Race selected', this.state.careers[careerKey].race);
  }

  renderChildren(props) {
    let childProps = {
      careers: this.state.careers,
      sidebar: this.state.sidebar,
      updateSidebarVisibility: this.updateSidebarVisibility,
      updateOverlayVisibility: this.updateOverlayVisibility,
      clickOverlay: this.clickOverlay,
      gaChangeCareer: this.gaChangeCareer,
      gaCareerSelected: this.gaCareerSelected,
      updateModalVisibility: this.updateModalVisibility,
      updateModalContent: this.updateModalContent,
    };
    return React.Children.map(props.children, (child) => {
      return React.cloneElement(child, childProps);
    });
  }

  render() {
    return (
      <div className={css.container}>
        <div className={css.container}>{this.renderChildren(this.props)}</div>
        <Overlay
          overlay={this.state.overlay}
          clickOverlay={this.clickOverlay}
          visible
        />
        <Sidebar
          careers={this.state.careers}
          updateSidebarVisibility={this.updateSidebarVisibility}
          updateOverlayVisibility={this.updateOverlayVisibility}
          sidebar={this.state.sidebar}
          gaCareerSelected={this.gaCareerSelected}
        />
        <Modal
          modal={this.state.modal}
          updateModalVisibility={this.updateModalVisibility}
          updateOverlayVisibility={this.updateOverlayVisibility}
        />
      </div>
    );
  }
}

export default App;
