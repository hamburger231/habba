import '../components/TitleText/TitleText.module.scss';
import '../components/TitleText/buttonborder.scss';

import React from 'react';

import { Baton } from '../components/CheckContent';
import { TitleHeader } from '../components/TitleText/AppHeader' ;
import { Counter } from '../components/TitleText/counter';
import { DynamicList } from '../components/TitleText/dynamiclist';
import { TitleText } from '../components/TitleText/TitleText';

const IndexPage = () => (
  <>
    <TitleText/>
    <TitleHeader/>
    <Baton/>
    <Counter/>
    <DynamicList/>
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
