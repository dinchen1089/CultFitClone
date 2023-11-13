import {
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  View,
  Text,
  FlatList,
} from 'react-native';
import React from 'react';
import {ImageList} from '../component/slider_image/ImageList';
import {
  HomeImageMap,
  HomeExploreSectionMap,
  HomeGoalBasedProgramMap,
  DevelopersMap,
  PeopleMap,
  RecipesMap,
  RecipesList,
} from '../images/imageMap';
import {Heading} from '../component/Header';
import {ImageWithOverlayList} from '../component/ImagesWithTextOverlay/ImagesWithOverLayList';
import {ProfileButton} from '../component/ui_helpers/ProfileButton';
import {ActionsList} from '../component/actions_list/ActionsList';
import {MainActionsData} from '../component_data/mainActionsData';
import {SecondaryActionsData} from '../component_data/secondaryActionsData';
import {PeopleCard} from '../component/cards/PeopleCard';
import {RecipeListCard} from '../component/RecipeListCard';
import {QuotesCard} from '../component/cards/QuotesCard';
import {English} from '../LocaleData/English';
const Home = ({navigation}) => {
  const {height, width} = useWindowDimensions();
  const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: '#000',
      padding: 0,
      margin: 0,
      paddingStart: 5,
    },
  });
  return (
    <ScrollView
      style={styles.page}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <ProfileButton />
      {/* landing  */}
      <ImageList
        list={Object.values(HomeImageMap)}
        id={'image-list-landing'}
        navigation={navigation}
        height={height / 1.6}
        width={width}
      />
      <ActionsList
        navigation={navigation}
        columns={3}
        ChildComponentsList={MainActionsData}
        moreActions={'action'}
      />
      {/* on scroll */}
      <ImageList
        list={Object.values(HomeExploreSectionMap)}
        id={'image-list-explore'}
        navigation={navigation}
        height={height / 3}
        width={width}
      />
      <ActionsList
        navigation={navigation}
        columns={3}
        style={{marginVertical: 80}}
        ChildComponentsList={SecondaryActionsData}
      />
      <Heading text={English.GOAL_SECTION_HEADER} />
      <ImageList
        list={Object.values(HomeGoalBasedProgramMap)}
        id={'image-list-goal-based-program'}
        navigation={navigation}
        height={height / 2}
        width={width}
      />
      <View
        style={{
          flexDirection: 'column',
          marginVertical: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
            textAlignVertical: 'center',
            color: '#fff',
          }}>
          {English.FIT_EDIT}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#a9a9a9',
            textAlign: 'center',
            width: '70%',
            marginTop: 10,
            textAlignVertical: 'center',
          }}>
          {English.GOAL_SECTION_SUBHEADER}
        </Text>
      </View>
      {/* People Section */}
      <ImageList
        list={Object.values(DevelopersMap)}
        id={'image-list-developers'}
        navigation={navigation}
        height={height / 2}
        width={width}
      />
      {/* Blogs section not going to add new photos for this */}
      <Heading text={English.BLOG_SECTION_HEADER} />
      <ImageWithOverlayList
        list={Object.values(HomeImageMap)}
        id={'image-list-blog'}
        navigation={navigation}
        height={height / 2.5}
        width={width / 1.2}
        seperatorComponent={<View style={{width: 30}}></View>}
        animated={false}
        imageStyle={{
          borderRadius: 10,
        }}
      />
      <Heading text={English.PEOPLE_SECTION_HEADER} />
      <FlatList
        data={Object.values(PeopleMap)}
        style={{marginHorizontal: 15, marginBottom: 15}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <PeopleCard
              properties={item}
              key={item.id}
              height={height / 2}
              width={width / 1.25}
            />
          );
        }}
        ItemSeparatorComponent={({item}) => {
          return <View style={{width: 10}}></View>;
        }}
      />
      <Heading text={English.RECIPE_SECTION_HEADER} />
      <ImageWithOverlayList
        list={Object.values(RecipesMap)}
        id={'image-list-blog'}
        navigation={navigation}
        height={height / 2.5}
        width={width / 1.2}
        seperatorComponent={<View style={{width: 30}}></View>}
        animated={false}
        imageStyle={{
          borderRadius: 10,
        }}
      />
      {/* because can't add flatlist with same orientation here */}
      <ScrollView style={{marginTop: 20}}>
        {Object.values(RecipesList).map(elem => {
          return <RecipeListCard properties={elem} key={elem.id} />;
        })}
      </ScrollView>

      {/* add quote */}
      <QuotesCard />
    </ScrollView>
  );
};

export default Home;
