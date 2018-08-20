//====================================================|
// MODULES: AUTHOR


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';
import CustomScroll from 'react-custom-scroll';

// Styles
import styles from './author.scss';
import textStyles from '../../patterns/molecules/text/text.scss';
import popoverStyles from '../../patterns/molecules/popover/popover.scss';
import '../../../styles/external/custom-scrollbar.scss';

// Actions
import changePopoverState from '../../actions/popover';

// Atoms
import XButton from '../../patterns/atoms/x-button';
import Signature from '../../patterns/atoms/signature';

// Molecules
import Popover from '../../patterns/molecules/popover';
import Text from '../../patterns/molecules/text';

// Data
import authorData from '../../../data/author.json';
import { author } from '../../../data/config.json';

// Images
import avatar from '../../../assets/images/author.png';


//--------------------------| Body

const Author = props => (
  <section className={styles.root}>
    <Popover className={styles.popover} visibility={props.popover.active === 'author'}>
      <XButton
        className={popoverStyles.xButton}
        onClick={() => {
          if (props.popover.active !== 'author') {
            props.dispatch(changePopoverState('author'));
          }
          else {
            props.dispatch(changePopoverState(''));
          }
        }}
      />
      <h2 className={popoverStyles.ttl}>{author.title}</h2>

      <div style={{ flex: 1, minHeight: 0, minWidth: 0 }}>
        <CustomScroll heightRelativeToParent='100%'>
          <div>
            <Text className={popoverStyles.text}>
              <img className={textStyles.image} src={avatar} alt={authorData.name} />

              {
                authorData.text.map((text, index) => (
                  <p className={textStyles.paragraph} key={index}>{text}</p>
                ))
              }

              <Signature>
                — <a href={`mailto:${authorData.email}`}>{authorData.name}</a>
              </Signature>
            </Text>
          </div>
        </CustomScroll>
      </div>
    </Popover>
  </section>
);


//--------------------------| State to Props

const mapStateToProps = state => ({
  popover: state.popover
});


//--------------------------| Export

export default connect(mapStateToProps)(Author);
