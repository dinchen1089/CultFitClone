import {View, Text} from 'react-native';
import QuoteRightIcon from '../../icons/QuoteRightIcon';
import {Quotes} from '../../LocaleData/quotes';
import {useEffect, useState} from 'react';
export const QuotesCard = () => {
  const [quote, setQuote] = useState(Quotes[0]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      let index = Math.floor(Math.random() * Quotes.length);
      setQuote(Quotes[index]);
    }, 6000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <View
      style={{
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        marginVertical: 10,
      }}>
      <QuoteRightIcon size={100} style={{marginVertical: 30}} />
      <Text
        style={{
          fontSize: 16,
          fontWeight: 300,
          marginVertical: 20,
          textAlign: 'center',
        }}>{`"${quote.quote}"`}</Text>
      <View
        style={{
          height: 1,
          width: '20%',
          backgroundColor: '#dfdfdf',
          marginVertical: 10,
        }}></View>
      <Text>- {quote.author}</Text>
    </View>
  );
};
