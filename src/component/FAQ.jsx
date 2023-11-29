import {StyleSheet, Text, View, Pressable} from 'react-native';
import {useState, useCallback} from 'react';
import {
  bootCampFAQs,
  joinBootCampTextIcon,
} from '../component_data/storeScreenData';
import RightArrowIcon from '../icons/RightArrowIcon';

const FAQElem = ({item}) => {
  const [isDetailsShow, ShowDetails] = useState(false);
  const [isMoreLine, SetMoreLine] = useState(false);
  const [showMore, SetShowMore] = useState(false);

  const onTextLayout = useCallback(e => {
    SetMoreLine(e.nativeEvent.lines.length > 10);
  }, []);

  return (
    <View style={{flex: 1, marginTop: 10}}>
      <Pressable
        style={{
          flexDirection: 'row',
          flex: 1,
        }}
        onPress={() => ShowDetails(prev => !prev)}>
        <Text style={styles.serialNoStyle}>{item.serialNo}</Text>
        <Text style={styles.questionStyle}>{item.question}</Text>
        <Text style={styles.plusMinusIcon}>{isDetailsShow ? '-' : '+'}</Text>
      </Pressable>
      {isDetailsShow && (
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 2}} />
          <View
            style={{
              flex: 10,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontStyle: 'italic',
                color: 'white',
                opacity: 0.5,
                flex: 10,
              }}
              numberOfLines={showMore ? undefined : 10}
              onTextLayout={onTextLayout}>
              {item.answer}
            </Text>
            {isMoreLine && (
              <Text
                onPress={() => SetShowMore(prev => !prev)}
                style={{fontSize: 15, fontStyle: 'italic', color: '#3399ff'}}>
                {showMore ? 'Show more' : 'Show Less'}
              </Text>
            )}
          </View>
          <View style={{flex: 1}} />
        </View>
      )}
    </View>
  );
};
const FAQ = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconTextStyle}>
        <Text style={styles.faqStyle}>{bootCampFAQs.title}</Text>
        <RightArrowIcon style={styles.iconStyle} />
      </View>
      <View>
        {bootCampFAQs.faqs.map(item => (
          <FAQElem item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(128,128,128,0.3)',
    padding: 15,
    marginTop: 30,
  },

  serialNoStyle: {
    color: 'white',
    flex: 2,
    opacity: 0.6,
    fontSize: 20,
    fontWeight: '700',
  },

  questionStyle: {
    flex: 10,
    fontSize: 16,
    color: 'white',
  },
  plusMinusIcon: {
    fontSize: 20,
    color: 'white',
    opacity: 0.5,
  },

  faqStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  iconStyle: {
    color: 'white',
    fontSize: 30,
  },
  iconTextStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
