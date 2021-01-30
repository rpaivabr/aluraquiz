/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ externalDb }) {
  return (
    <ThemeProvider theme={externalDb.theme}>
      <QuizScreen externalDb={externalDb} />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  const externalDb = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    .then((res) => res.json());
  return {
    props: {
      externalDb: { ...externalDb },
    },
  };
}
