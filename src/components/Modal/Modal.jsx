import { Component } from 'react';
import { ModalStyled, OverlayStyled } from './Modal.styled';

export class Modal extends Component {

  onKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  }; 

  componentDidMount = () => {
    window.addEventListener('keydown', this.onKeyDown);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.onKeyDown);
  };

  onOverlay = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <OverlayStyled onClick={this.onOverlay}>
        <ModalStyled>{this.props.children}</ModalStyled>
      </OverlayStyled>
    );
  }
}
