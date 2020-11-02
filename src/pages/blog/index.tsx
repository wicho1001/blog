import React from 'react'
import Layout from '../../components/shared/Layout';
import Card from '../../components/shared/Card';


const Index = () => {
  return (
    <Layout>
      <section className="grid grid-cols-2 gap-16 w-4/5 mx-auto py-10">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </section>
    </Layout>
  )
}

export default Index
