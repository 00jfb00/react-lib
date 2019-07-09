import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class KButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      children: props.children,
      style: props.style,
      value: 'Antes'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  static defaultProps = {
    block: false,
    outline: false,
    loading: false,
    success: false,
    size: "medium",
    disabled: false,
    title: 'Title',
    state: 'primary',
    brand: 'default'
  };

  static propTypes = {
    /** Expande o button para 100% do espaço disponível**/
    block: PropTypes.bool,

    /** Adiciona estilo deleniado**/
    outline: PropTypes.bool,

    /** Ativa modo loading de carregamento**/
    loading: PropTypes.bool,

    /** Exibe um ícone de check no local do 'title'. Geralmente usado após o carregamento do 'loading'**/
    success: PropTypes.bool,

    /** Define um tamanho para o botão. Tamanhos aceitos: sm, medium e lg**/
    size: PropTypes.string,

    /** Desabilita o botão**/
    disabled: PropTypes.bool,

    /** Título do botão - Será exibido dentro do botão*/
    title: PropTypes.string,

    /** O estado do botão é baseado no tema. Os valores aceitos são: 'primary', 'secondary', 'ternary', 'gradient', 'white', 'black', 'dark', 'light', 'grey', 'grey-dark', 'grey-lighter', 'success', 'warning', 'info', 'danger' **/
    state: PropTypes.string,

    /** O estado do botão é baseado na marca. Os valores aceitos são: 'default', 'anhanguera' **/
    brand: PropTypes.string,
  };

  handleClick = () => {
    this.setState({
      value: 'Depois'
    }, this.props.onClick)
  };

  render() {
    const {block, outline, loading, success, size, disabled, title, state, brand, ...rest} = this.props;

    return (
      <Button
        onClick={this.handleClick}
        className={[
          'k-button',
          `is-${state}-${brand}`,
          (outline) ? `is-outlined` : ``
        ]}
        variant={state}
        block={block}
        disabled={disabled}
        size={size}
        {...rest}
      >
        {title}
      </Button>
    )
  }
}

export default KButton
