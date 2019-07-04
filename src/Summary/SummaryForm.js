import React, { Component } from 'react'
import SummaryTotal from './SummaryTotal'
import Summary from './Summary'

export default class SummaryForm extends Component {
    render() {
        

        return (
            <section className="main__summary">
                <Summary selected={this.props.selected}/>
                <SummaryTotal selected={this.props.selected}/>
            </section>
        )
    }
}
