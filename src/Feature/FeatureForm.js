import React, { Component } from 'react'
import FeatureItem from './FeatureItem'
import FeatureList from './FeatureList'


export default class FeatureForm extends Component {
    render() {
        return (
            <section className="main__form">
                <FeatureList
                    features={this.props.features}
                    handleUpdateFeature={this.props.handleUpdateFeature}
                    selected={this.props.selected} />
                <FeatureItem features={this.props.features} />
            </section>
            
        )
    }
}
