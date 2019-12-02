import React from 'react';

import cv_pl from "../../assets/pdf/Łukasz_Sobola_pl.pdf";
import cv_en from "../../assets/pdf/Łukasz_Sobola_en.pdf";

import "./pdfButton.scss";

class PdfButton extends React.Component {
    pdfs = {
        pl: cv_pl,
        en: cv_en
    };
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            scrollPos: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        const { scrollPos } = this.state;
        this.setState({
          scrollPos: document.body.getBoundingClientRect().top * -1,
          show: window.innerHeight * 0.8 < scrollPos
        });
    }

    render() {
        return (
            <a href={this.pdfs[this.props.lang]} target="_blank" className={"pdf-button " + (this.state.show ? 'show' : '')}  rel="noopener noreferrer">{this.props.name}</a>
        )
    }
}

export default PdfButton;
