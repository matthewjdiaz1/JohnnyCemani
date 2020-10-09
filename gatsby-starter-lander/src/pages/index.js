import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

export default () => (
  <Layout >
    <section className="pt-20 md:pt-40 bg-bg">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Johnny Cemani
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            The only thing blacker than our chickens are our eggs.
          </p>
          <p className="mt-8 md:mt-12">
            {/* <Button size="lg">Get Started</Button> */}
          </p>
          <p className="mt-4 text-gray-600">completely murdered out chickens and eggs. real talk.</p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="About" className="py-20 lg:pb-40 lg:pt-48 bg-bg-lighter">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">What we offer</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Available Chickens</p>
              <p className="mt-4">
                Our chickens are the shit. this is a paragraph about why our chickens are better than everyone. An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Available Eggs</p>
              <p className="mt-4">
                We also sell eggs. An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer. An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer. An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-bg">
      <SplitSection
        id="Chickens"
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">Chickens</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Some info on chickens, more focused on How to buy, buying options, how many are available, etc. don't repeat from paragraph above. pix to the right(over/under on mobile).
          </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        id="Eggs"
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">Eggs</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Some info on Eggs, but don't repeat from paragraph above. pix left(over/under on mobile).
          </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
    </section>
    {/* <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    /> */}
    {/* <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section> */}
    <section id="Testimonials" className="py-20 lg:py-40 bg-bg-lighter">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section
      id="Purchase"
      className="container mx-auto my-20 py-24 bg-bg-darker rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Wanna buy some shit?</h3>
      <p className="mt-8 text-xl font-light">
        Get in touch. Shoot us an email for a quote and shit, or whatever.
      </p>
      <p className="mt-8">
        <Button size="xl">Email</Button>
      </p>
    </section>
  </Layout>
);
