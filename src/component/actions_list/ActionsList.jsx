import {memo, useMemo} from 'react';
import {View} from 'react-native';
import {BasicActionLayout} from './BasicActionLayout';
import BlockButton from '../slider_image/BlockButton';

const ActionsListComponent = ({
  navigation,
  columns,
  ChildComponentsList = [],
  style,
  moreActions = null,
}) => {
  const getNumItemsInRow = length => {
    return length / columns;
  };
  const numRows = getNumItemsInRow(ChildComponentsList.length);
  const RenderItems = items => {
    return (
      <View
        key={Math.random()}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        {items.map((item, index) => {
          return (
            <BasicActionLayout
              navigation={navigation}
              key={item.key}
              style={{flex: 1}}
              {...item}
            />
          );
        })}
      </View>
    );
  };

  const populatedList = useMemo(() => {
    let arr = [];
    for (let i = 0; i < numRows; i++) {
      arr.push(
        RenderItems(
          ChildComponentsList.slice(i * columns, i * columns + columns),
        ),
      );
    }
    return arr;
  }, [ChildComponentsList]);

  return (
    <View
      style={[
        {
          flex: 1,
          flexDirection: 'column',
          alignSelf: 'center',
          alignItems: 'center',
          padding: 10,
          margin: 10,
        },
        {...style},
      ]}>
      {populatedList}
      {moreActions && (
        <BlockButton properties={{bottomButton: {text: 'See More'}}} />
      )}
    </View>
  );
};
export const ActionsList = memo(ActionsListComponent);
