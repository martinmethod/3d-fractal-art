//====================================================|
// MODULES: AUTHOR


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';
import CustomScroll from 'react-custom-scroll';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// Styles
import styles from './author.scss';
import textStyles from '../../patterns/molecules/text/text.scss';
import popoverStyles from '../../patterns/molecules/popover/popover.scss';
import '../../../styles/external/custom-scrollbar.scss';

// Actions
import changePopoverState from '../../actions/popover';

// System
import { authorLabel } from '../../../system/labels.json';

// Atoms
import XButton from '../../patterns/atoms/x-button';
import Signature from '../../patterns/atoms/signature';

// Molecules
import Popover from '../../patterns/molecules/popover';
import Text from '../../patterns/molecules/text';


//--------------------------| Body

const Author = ({ data, dispatch, popover }) => {
  const name = `${data.firstName} ${data.lastName}`;

  return (
    <section className={styles.root}>
      <Popover className={styles.popover} visibility={popover.active === 'author'}>
        <XButton
          className={popoverStyles.xButton}
          onClick={() => {
            if (popover.active !== 'author') {
              dispatch(changePopoverState('author'));
            }
            else {
              dispatch(changePopoverState(''));
            }
          }}
        />
        <h2 className={popoverStyles.ttl}>{authorLabel}</h2>

        <div style={{ flex: 1, minHeight: 0, minWidth: 0 }}>
          <CustomScroll heightRelativeToParent='100%'>
            <div>
              <Text className={popoverStyles.text}>
                <img className={textStyles.image} src={data.avatar.fields.file.url} alt={name} />

                <div
                  dangerouslySetInnerHTML = {{
                    __html: documentToHtmlString(data.summary)
                  }}
                />

                <Signature>
                  — <a href={`mailto:${data.email}`}>{name}</a>
                </Signature>
              </Text>
            </div>
          </CustomScroll>
        </div>
      </Popover>
    </section>
  );
};


//--------------------------| State to Props

const mapStateToProps = state => ({
  popover: state.popover
});


//--------------------------| Export

export default connect(mapStateToProps)(Author);
