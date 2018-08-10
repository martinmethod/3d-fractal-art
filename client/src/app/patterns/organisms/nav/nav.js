// =========================| Navigation |========================= //



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
import './nav.scss';
import '../../../../styles/external/accordion.scss';
import '../../../../styles/external/custom-scrollbar.scss';

// Actions
import changePopoverState from '../../../actions/popover';
import { loadModel } from '../../../actions/gallery';

// Helpers
import { getCategoryByModelId } from '../../../helpers/models';

// Atoms
import XButton from '../../../patterns/atoms/x-button';
import Thumb from '../../../patterns/atoms/thumb';

// Molecules
import Popover from '../../../patterns/molecules/popover';

// Data
import { models } from '../../../../data/models.json';
import { gallery } from '../../../../data/config.json';


//--------------------------| Body

class Nav extends React.PureComponent {
  state = {
    mouseover: ''
  };

  render() {
    return (
      <nav className='po-nav'>
        <Popover visibility={this.props.popover.active === 'nav'}>
          <XButton
            onClick={() => {
              if (this.props.popover.active !== 'nav') {
                this.props.dispatch(changePopoverState('nav'));
              }
              else {
                this.props.dispatch(changePopoverState(''));
              }
            }}
          />
          <h2 className='ttl'>{gallery.navLabel}</h2>
          <Thumb active={this.state.mouseover} />

          <div className='models-nav'>
            <Accordion>
              {
                models.map((cat, index) => (
                  <AccordionItem
                    key={index}
                    expanded={getCategoryByModelId(this.props.id).name === cat.name}
                  >
                    <AccordionItemTitle>
                      {cat.title}
                    </AccordionItemTitle>
                    <AccordionItemBody>
                      <CustomScroll heightRelativeToParent='100%'>
                        <ul className='models-list'>
                          {
                            cat.models.map(m => (
                              <li key={m.id}>
                                <a
                                  data-selected={this.props.id === m.id}
                                  onMouseEnter={() => {
                                    this.setState(() => ({
                                      mouseover: m.id
                                    }));
                                  }}
                                  onMouseLeave={() => {
                                    this.setState(() => ({
                                      mouseover: ''
                                    }));
                                  }}
                                  onClick={() => {
                                    this.props.dispatch(loadModel(m.id));
                                  }}
                                >
                                  {m.title}
                                  {m.example && <i title={gallery.exampleLabel} />}
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
