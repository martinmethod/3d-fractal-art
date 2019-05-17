//====================================================|
// ORGANISMS: NAVIGATION


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';
import CustomScroll from 'react-custom-scroll';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';

// Styles
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-custom-scroll/dist/customScroll.css';
import '../../../../styles/external/accordion.scss';
import '../../../../styles/external/custom-scrollbar.scss';
import styles from './nav.scss';
import popoverStyles from '../../molecules/popover/popover.scss';

// Actions
import changePopoverState from '../../../actions/popover';
import { loadModel } from '../../../actions/gallery';

// Services
import { getCategories, getCategoryByModelId } from '../../../services/data';

// System
import { navLabel, exampleLabel, twoDAbstractionsLabel } from '../../../../system/labels.json';

// Atoms
import XButton from '../../atoms/x-button';
import Thumb from '../../atoms/thumb';

// Molecules
import Popover from '../../molecules/popover';


//--------------------------| Body

class Nav extends React.PureComponent {
  state = {
    mouseover: ''
  };

  render() {
    return (
      <nav className={styles.root}>
        <Popover className={styles.popover} visibility={this.props.popover.active === 'nav'}>
          <XButton
            className={popoverStyles.xButton}
            onClick={() => {
              if (this.props.popover.active !== 'nav') {
                this.props.dispatch(changePopoverState('nav'));
              }
              else {
                this.props.dispatch(changePopoverState(''));
              }
            }}
          />
          <h2 className={popoverStyles.ttl}>{navLabel}</h2>
          <Thumb active={this.state.mouseover} />

          <div className={styles.modelsNav}>
            <a className={styles.link} style={{ textAlign: 'center', padding: '0.5em 0' }} href='https://mathbeauty.houzz.com/' target='_blank' rel='noopener noreferrer'>{ twoDAbstractionsLabel }</a>
            <Accordion>
              {
                getCategories().map((cat, index) => (
                  <AccordionItem
                    key={index}
                    expanded={getCategoryByModelId(this.props.id).id === cat.fields.id}
                  >
                    <AccordionItemTitle>
                      {cat.fields.title}
                    </AccordionItemTitle>
                    <AccordionItemBody>
                      <CustomScroll heightRelativeToParent='100%'>
                        <ul className={styles.modelsList}>
                          {
                            cat.fields.fractals.map(m => (
                              <li className={styles.modelItem} key={m.fields.id}>
                                <a
                                  className={styles.link}
                                  data-selected={this.props.id === m.fields.id}
                                  onMouseEnter={() => {
                                    this.setState(() => ({
                                      mouseover: m.fields.id
                                    }));
                                  }}
                                  onMouseLeave={() => {
                                    this.setState(() => ({
                                      mouseover: ''
                                    }));
                                  }}
                                  onClick={() => {
                                    this.props.dispatch(loadModel(m.fields.id));
                                  }}
                                >
                                  {m.fields.title}
                                  {m.fields.example && <i title={exampleLabel} />}
                                </a>
                              </li>
                            ))
                          }
                        </ul>
                      </CustomScroll>
                    </AccordionItemBody>
                  </AccordionItem>
                ))
              }
            </Accordion>
          </div>
        </Popover>
      </nav>
    );
  }
}


//--------------------------| State to Props

const mapStateToProps = state => ({
  id: state.gallery.id,
  popover: state.popover
});


//--------------------------| Export

export default connect(mapStateToProps)(Nav);
