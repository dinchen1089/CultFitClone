import {View, Animated, Easing} from 'react-native';
import {useRef, createRef, useEffect} from 'react';

export const BottomSlider = ({setKey, listRef, list}) => {
  const slideAnimation = useRef([...Array(list.length)].map(() => createRef()));
  slideAnimation.current.forEach(elem => {
    elem.current = new Animated.Value(0);
  });
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: list.length * 40,
      }}>
      {list.map((item, index) => {
        const slide = () => {
          Animated.timing(slideAnimation.current[index].current, {
            toValue: 20,
            duration: 6000,
            easing: Easing.linear,
            delay: index * 6000,
            useNativeDriver: false,
          }).start(() => {
            // listRef.current.scrollToIndex({
            //   index: (index + 1) % list.length,
            //   animated: true,
            // });
            if (index === list.length - 1) {
              //do something to restart the animation. Remount??
              setKey(prev => prev + 1);
            }
          });
        };
        let barWidth = {
          width: slideAnimation.current[index].current,
        };
        useEffect(() => {
          setTimeout(() => {
            slide();
          }, 1000);
        }, []);
        return (
          <View
            key={item.id}
            style={[
              {
                height: 0.8,
                width: 20,
                backgroundColor: 'rgba(128, 128, 128, 0.5)',
              },
            ]}>
            <Animated.View
              style={[
                {
                  height: 0.8,
                  backgroundColor: '#fff',
                  width: 0.01,
                },
                barWidth,
              ]}></Animated.View>
          </View>
        );
      })}
    </View>
  );
};
