import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import styles from '../../styles';
import { colors, types } from '../../../resources';
import strings from '../../../resources/strings';

import { BottomButton, CheckBox } from '../../../components/Button';
import { NotiPanel } from '../../../components/Panel';
import { InputText, InputTextOptions } from '../../../components/Input';
import { TextArea, LabelText } from '../../../components/Text';
import { Navigation as NavAction } from '../../../actions';
import { SelectableList } from '../../../components/List';

class MyAccounts extends React.Component {
  constructor(props) {
    super(props);

    const { callback } = this.props;

    this.state = {
      list: [],
      callback,
    };

    this.buildAccountList = this.buildAccountList.bind(this);
    this.callbackBottomButton = this.callbackBottomButton.bind(this);
  }

  buildAccountList() {
    const { accounts } = this.props;
    const listArray = [];
    accounts.forEach((account, index) => {
      listArray.push({
        listKey: `${index}`,
        type: types.ListItem.ADDRESS,
        name: account.name,
        address: account.address,
      });
    });

    return listArray;
  }

  callbackBottomButton() {
    const { callback } = this.state;
    const { doAction } = this.props;

    const item = this.list.getSelected();

    if (item) {
      callback(item.address);
      doAction(NavAction.popScreen());
    }
  }

  render() {
    const { settings } = this.props;
    const Strings = strings[settings.language].Transactions.ReceiveAccount.MyAccounts;

    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.alignCenter}
          showsVerticalScrollIndicator={false}
        >
          <SelectableList
            ref={(c) => { this.list = c; }}
            listData={{
              data: this.buildAccountList(),
            }}
            noDataText={Strings.NOTI_NO_ADDRESS}
          />
          <View style={{ marginBottom: 10 }} />
        </ScrollView>
        <BottomButton
          actions={[
            {
              text: Strings.BUTTON_TEXT_SELECT,
              callback: this.callbackBottomButton,
            },
          ]}
        />
      </View>
    );
  }
}

MyAccounts.navigationOptions = {
  header: null,
};

const mapStateToProps = state => ({
  accounts: state.accounts.list,
  settings: state.settings,
});


const mapDispatchToProps = dispatch => ({
  doAction: action => dispatch(action),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAccounts);
