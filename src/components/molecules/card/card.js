import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Icon} from 'react-icons-kit'
import { CardContainer } from './style';

export default class Card extends Component {
    static propTypes = {
        icon: PropTypes.object,
        title: PropTypes.string,
        description: PropTypes.string
    }

    render() {
        const {icon, title, link = "#"} = this.props;
        return (
            <CardContainer>
                {icon && 
                    <div className="card-icon">
                        <Icon icon={icon} size={52} />
                    </div>
                }
                <div>
                {title &&
                    <a href={link} className="card-link">
                        <h3 className="card-title">{title}</h3>
                    </a>
                }
                    <p className="description">{this.props.children}</p>
                </div>                
            </CardContainer>
        );
    }
}
