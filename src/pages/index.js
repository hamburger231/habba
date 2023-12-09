import '../components/TitleText/TitleText.module.scss';
import '../components/buttonborder.scss';

import React from 'react';

import { TitleHeader } from '../components/AppHeader' ;
import { Baton } from '../components/CheckContent';
import { Counter } from '../components/counter';
import { DynamicList } from '../components/DynamicList';
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
