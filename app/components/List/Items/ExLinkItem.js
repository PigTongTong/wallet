import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from '../styles';
import arrow from '../../../resources/images/arrow.png';
import icExlink from '../../../resources/images/external_link.png';
import { Navigation as NavAction } from '../../../actions';
import { colors } from '../../../resources';

const ExLinkItem = ({ text, textColor, value, doAction }) => (
  <TouchableOpacity
    style={styles.listItem}
    onPress={() => {
      doAction(NavAction.pushScreen(
        NavAction.Screens.INAPP_BROWSER,
        {
          URI: value,
        },
      ));
    }}
  >
    <Text style={[styles.itemText, { color: textColor }]}>
      {text}
    </Text>
    <View
      style={styles.rowDirection}
    >
      <Image style={styles.exLinkIcon} source={icExlink} />
      <Image style={styles.itemArrow} source={arrow} />
    </View>
  </TouchableOpacity>
);

ExLinkItem.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string,
  textColor: PropTypes.string,
};

ExLinkItem.defaultProps = {
  textColor: colors.itemTextBlack,
  value: '',
};

const mapDispatchToProps = dispatch => ({
  doAction: action => dispatch(action),
});

export default connect(null, mapDispatchToProps)(ExLinkItem);
