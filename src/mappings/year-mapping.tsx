interface YearMapping {
  [year: number]: {
    title: string
    story: React.ReactNode
    image: string
    src?: string
  }
}

const yearMapping: YearMapping = {
  2006: {
    title: "A rough start",
    story: (
      <>
        <p>
          The first stage of Falcon 1 came in September and the second stage
          came a month later; they were assembled and carried to the launch site
          using a wheeled strongback, rolling on top of pieces of plywood. One
          day before the first attempted Falcon 1 launch, due to frustration and
          intense pressure, the employees on Omelek went on strike; this was
          quickly resolved by a supply drop of chicken wings and cigarettes.
        </p>
        <p>
          Originally, TacSat-1 was going to be the payload for the maiden Falcon
          1 launch, but eventually the FalconSAT-2 satellite from the United
          States Air Force Academy was chosen instead. The static fire test
          before the launch on 26 November 2005 was postponed due to a helium
          and oxygen leak by a faulty valve, and the attempted launch on 20
          December was also cancelled due to the bad weather. Thompson, who was
          supervising the launch, found that the Falcon 1 first stage buckled
          and only mere seconds away from a violent implosion. This is again
          caused by a faulty valve that did not open during propellant
          detanking.
        </p>
        <p>
          A new first stage was shipped to Omelek. After the rocket was
          assembled, on February 6, the second stage&apos;s avionics short
          circuited and almost lead to the launch&apos;s months-long delay, if
          not for the quickly obtained capacitor from the mainland. The maiden
          launch of Falcon 1 happened on 24 March 2006 at 22:30 UTC, which a
          fire damaged the rocket&apos;s pressurization system and cause the
          Merlin engine to flame off at T+29 seconds. The next morning, SpaceX
          employees and civilians from the atoll cleaned up the rocket&apos;s
          debris and eventually found FalconSAT-2 lying inside a machine shop.
        </p>
      </>
    ),
    image: "/2006.jpg"
  },
  2007: {
    title: "Another failure",
    story: (
      <>
        <p>
          The first stage of Falcon 1 came in September and the second stage
          came a month later; they were assembled and carried to the launch site
          using a wheeled strongback, rolling on top of pieces of plywood. One
          day before the first attempted Falcon 1 launch, due to frustration and
          intense pressure, the employees on Omelek went on strike; this was
          quickly resolved by a supply drop of chicken wings and cigarettes.
        </p>
        <p>
          Originally, TacSat-1 was going to be the payload for the maiden Falcon
          1 launch, but eventually the FalconSAT-2 satellite from the United
          States Air Force Academy was chosen instead. The static fire test
          before the launch on 26 November 2005 was postponed due to a helium
          and oxygen leak by a faulty valve, and the attempted launch on 20
          December was also cancelled due to the bad weather. Thompson, who was
          supervising the launch, found that the Falcon 1 first stage buckled
          and only mere seconds away from a violent implosion. This is again
          caused by a faulty valve that did not open during propellant
          detanking.
        </p>
        <p>
          A new first stage was shipped to Omelek. After the rocket was
          assembled, on February 6, the second stage&apos;s avionics short
          circuited and almost lead to the launch&apos;s months-long delay, if
          not for the quickly obtained capacitor from the mainland. The maiden
          launch of Falcon 1 happened on 24 March 2006 at 22:30 UTC, which a
          fire damaged the rocket&apos;s pressurization system and cause the
          Merlin engine to flame off at T+29 seconds. The next morning, SpaceX
          employees and civilians from the atoll cleaned up the rocket&apos;s
          debris and eventually found FalconSAT-2 lying inside a machine shop.
        </p>
      </>
    ),
    image: "https://imgur.com/azYafd8.jpg"
  },
  2008: {
    title: "The first signs of success",
    story: (
      <>
        <p>
          On August 4, 2008, SpaceX accepted a further $20 million investment
          from Founders Fund. In early 2012, approximately two-thirds of the
          company was owned by its founder and his 70 million shares were then
          estimated to be worth $875 million on private markets, which roughly
          valued SpaceX at $1.3 billion as of February 2012. After the COTS 2+
          flight in May 2012, the company private equity valuation nearly
          doubled to $2.4 billion.
        </p>
        <p>
          Spacex achieved the first privately funded, liquid-fueled rocket
          (Falcon 1) to reach orbit this year on 28 September 2008
        </p>
        <p>Spacex has more than 500 employees by now.</p>
      </>
    ),
    image: "/2006.jpg"
  },
  2009: {
    title: "Slow but steady",
    story: (
      <>
        <p>
          On 16 June 2009 SpaceX announced the opening of its Astronaut Safety
          and Mission Assurance Department. It hired former NASA astronaut Ken
          Bowersox to oversee the department as a vice president of the company.
          However, it has since been reported that the former astronaut
          subsequently left SpaceX in late 2011. No reason was given and no
          replacement in that position has been announced.
        </p>
      </>
    ),
    image: "https://imgur.com/azYafd8.jpg"
  },
  2010: {
    title: "The falcon 9 is born",
    story: (
      <>
        <p>
          Musk stated in a 2011 interview that he hopes to send humans to
          Mars&apos; surface within 10 to 20 years. In 2010, Musk&apos;s
          calculations convinced him that the colonization of Mars was possible.
        </p>
        <p>
          Spacex achieved the first privately funded company to successfully
          launch (by Falcon 9), orbit and recover a spacecraft (Dragon) (9
          December 2010).
        </p>
        <p>Spacex has over 1100 employees this year.</p>
      </>
    ),
    image: "https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg"
  },
  2011: {
    title: "The falcon 9 flies again",
    story: (
      <>
        <p>The space shuttle program has officially stopped this year.</p>
        <p>
          The falcon 9 launch this year was the first (non test) successful
          launch for this rocket.
        </p>
      </>
    ),
    image: "https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg"
  },
  2012: {
    title: "Rendezvous with the ISS",
    story: (
      <>
        <p>
          In 2012 SpaceX advertised a launch price of $57 million on Falcon 9,
          while Arianespace was advertising a launch price of $137 million per
          launch.
        </p>
        <p>
          In early 2012, approximately two-thirds of the company was owned by
          its founder and his 70 million shares were then estimated to be worth
          $875 million on private markets, which roughly valued SpaceX at $1.3
          billion as of February 2012. After the COTS 2+ flight in May 2012, the
          company private equity valuation nearly doubled to $2.4 billion.
        </p>
        <p>
          In 2012 an initial public offering (IPO) was perceived as possible by
          the end of 2013, but then Musk stated in June 2013 that he planned to
          hold off any potential IPO until after the &quot;Mars Colonial
          Transporter is flying regularly&quot;.
        </p>
        <p>
          Spacex achieved the first privately funded company to send a
          spacecraft (Dragon) to the International Space Station (25 May 2012).
        </p>
        <p>Spacex has around 1800 employees this year.</p>
      </>
    ),
    image: "https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg"
  },
  2013: {
    title: "Imagining the future",
    story: (
      <>
        <p>
          In June 2013, Musk used the descriptor Mars Colonial Transporter to
          refer to the privately funded development project to design and build
          a spaceflight system of rocket engines, launch vehicles and space
          capsules to transport humans to Mars and return to Earth.
        </p>
        <p>
          A major goal of SpaceX has been to develop a rapidly reusable launch
          system. As of March 2013, including a test program of the
          low-altitude, low-speed Grasshopper vertical takeoff, vertical landing
          (VTVL) technology demonstrator rocket, and a high-altitude, high-speed
          Falcon 9 post-mission booster return test campaign where—beginning in
          mid-2013, with the sixth overall flight of Falcon 9—every first stage
          will be instrumented and equipped as a controlled descent test vehicle
          to accomplish propulsive-return over-water tests. SpaceX COO Gwynne
          Shotwell said at the Singapore Satellite Industry Forum in summer 2013
          &quot;If we get this [reusable technology] right, and we&apos;re
          trying very hard to get this right, we&apos;re looking at launches to
          be in the US$5 to 7 million range, which would really change things
          dramatically.&quot;
        </p>
        <p>
          This year, Spacex was the first private company to send a satellite
          into geosynchronous orbit (SES-8, 3 December 2013)
        </p>
        <p>Spacex&apos;s employee count skyrocketed to around 3000 - 3800.</p>
      </>
    ),
    image: "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg"
  },
  2014: {
    title: "A 'tipping' of the scales",
    story: (
      <>
        <p>
          Since spacecraft like the Dragon were classified as munitions, and
          considered weapons under arms regulations until November 2014, SpaceX
          Mission controllers were unable to release more information to the
          public.
        </p>
        <p>
          In March 2014, COO Gwynne Shotwell said that once the Falcon Heavy and
          Dragon 2 crew version are flying, the focus for the company
          engineering team will be on developing the technology to support the
          transport infrastructure necessary for Mars missions. The project
          evolved into the Interplanetary Transport System, then the Big Falcon
          Rocket, and finally the SpaceX Starship.
        </p>
        <p>
          Spacex has gotten a lot closer to the goal of reusability this year.
          Two first stages had been landed successfully, but unfortunately both
          tipped over shortly after the landing.
        </p>
      </>
    ),
    image: "https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg"
  },
  2015: {
    title: "It has landed!",
    story: (
      <>
        <p>
          On June 28, 2015 CRS-7 launched a Falcon 9 carrying an unmanned Dragon
          capsule intended to take supplies to the International Space Station.
          2 minutes and 19 seconds into the flight a cloud of vapor was seen by
          the tracking camera forming outside the craft. A few seconds afterward
          there was a loss of pressure in the helium tank, after which they
          exploded, causing a complete failure of the mission.[73] The software
          was not programmed to deploy the parachute for the Dragon capsule
          after a launch mishap, therefore the Dragon broke upon impact.[74] The
          problem was discovered to be a failed 2 ft (61 cm) steel strut,
          purchased from a supplier, on a helium pressure vessel, which broke
          due to the force of acceleration. This caused a breach and allowed
          helium to escape causing the loss of the spacecraft, which exploded.
        </p>
        <p>
          Spacex became the first private company to send a probe beyond Earth
          orbit (Deep Space Climate Observatory, 11 February 2015)
        </p>
        <p>
          Spacex executed the first landing of a first stage orbital capable
          rocket (Falcon 9, Flight 20) (22 December 2015 1:39 UTC)
        </p>
      </>
    ),
    image: "https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg"
  },
  2016: {
    title: "A promising year",
    story: (
      <>
        <p>
          On September 1, 2016, a Falcon 9 Full Thrust launch vehicle exploded
          during a propellant fill operation for a standard pre-launch static
          fire test at Cape Canaveral Launch Complex 40. There were no reported
          injuries, as the area was cleared for the test. However the payload,
          the Spacecom AMOS-6 communications satellite valued at $200 million,
          was destroyed. Spacecom claims its contract, since the launch failed,
          allows it to choose to receive $50 million or a future flight at no
          cost. Musk described the event as the &quot;most difficult and complex
          failure&quot; ever in SpaceX&apos;s 14-year history; SpaceX reviewed
          nearly 3,000 channels of telemetry and video data covering a period of
          35 to 55 milliseconds for the postmortem.
        </p>
        <p>
          Spacex achieved the first water landing of a first stage orbital
          capable rocket (Falcon 9) (8 April 2016 20:53 UTC)
        </p>
        <p>Spacex has around 5000 employees this year.</p>
      </>
    ),
    image: "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg"
  },
  2017: {
    title: "The assembly line is running",
    story: (
      <>
        <p>
          After the setback of the launchpad explosion, SpaceX successfully got
          back to flying on 14 January 2017, with its launch of Iridium
          satellites. On February 19, 2017, a Falcon 9 carrying CRS-10 conducted
          the first launch from Kennedy Space Center&apos;s Launch Complex 39A.
          The first stage of the launch planned on the end of February, 2017
          will be the recovered and refurbished one from April 8, 2016.
        </p>
      </>
    ),
    image: "https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg"
  },
  2018: {
    title: "The falcon heavy flies",
    story: (
      <>
        <p>
          Spacex started development of the most powerful operational rocket as
          of 2020 (Falcon Heavy, first flight 6 February 2018)
        </p>
      </>
    ),
    image: "https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg"
  },
  2019: {
    title: "Falcon heavy is operational",
    story: (
      <>
        <p>
          On May 23, 2019, SpaceX successfully deployed the first 60 of around
          12,000 satellites in its planned Starlink - which it aims to use to
          provide low latency network communications via a large constellation
          in low Earth orbit (LEO).
        </p>
        <p>Demand of customers was significantly lower than expected.</p>
      </>
    ),
    image: "https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg"
  },
  2020: {
    title: "The first manned mission",
    story: (
      <>
        <p>
          On May 30, 2020, SpaceX successfully launched two NASA astronauts
          (Douglas Hurley and Robert Behnken) into orbit on a Crew Dragon
          spacecraft during SpaceX Demo-2, making SpaceX the first private
          company to send astronauts to the International Space Station and
          marking the first crewed launch from American soil in 9 years. The
          mission launched from Launch Complex 39A of the Kennedy Space Center
          in Florida. SpaceX Demo-2 successfully docked with the ISS on May 31,
          2020 and returned the astronauts safely on Aug 2, 2020.
        </p>
        <p>
          In August 2020, SpaceX indicated it was looking to build a resort in
          South Texas with the intent to turn &quot;Boca Chica into a &apos;21st
          century Spaceport&apos;&quot;.
        </p>
        <p>
          In 2020, Abu Dhabi-based IHC or International Holding Group bought 94%
          stakes in a private equity fund namely, Falcon CI IV LP, which had
          invested in SpaceX. Following the purchase of stakes, SpaceX completed
          $850 million worth of equity funding round, taking the total value of
          the company to nearly $74 billion in March 2021.
        </p>
        <p>
          This year, Spacex was the first private company to send humans into
          orbit (Crew Dragon Demo-2, 30 May 2020)
        </p>
      </>
    ),
    image: "https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg"
  },
  2021: {
    title: "Records for reusability",
    story: (
      <>
        <p>
          This year alone, Musk began (reportedly) accepting payments for
          missions in the cryptocurrency Dogecoin and made a Saturday Night Live
          guest appearance in which he participated in multiple skits, even
          playing the Nintendo supervillain Wario.
        </p>
        <p>
          Hidden behind some of the company&apos;s more high-profile
          achievements this year (think Starship landing, Starlink and human
          spaceflight launches) is the powerhouse Falcon 9 rocket. Musk wanted
          to reach 48 launches of the system in 2021; although SpaceX
          didn&apos;t get nearly that far, the company did set a new record of
          31 launches by December&apos;s end, with payloads ranging from
          military satellites to parts of its own megaconstellation of Starlink
          internet satellites. The company also successfully landed a rocket for
          the 100th time and flew a Falcon 9 for a record 11 times in December
          to cap off the year.
        </p>
      </>
    ),
    src: "space.com (Spacex record breaking 2021 year)",
    image: "https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg"
  },
  2022: {
    title: "An arsenal of satellites",
    story: (
      <>
        <p>
          On average, SpaceX launched every 6 days from one of their three sites
          with 92% of missions completed with flight-proven first stage rocket
          boosters, and Falcon 9 now holds the world record for most launches of
          a single vehicle type in a single year.
        </p>
        <p>
          Starlink is SpaceX&apos;s huge constellation of internet satellites,
          which beams service to customers around the world. As Ars Technica
          noted, 34 of SpaceX&apos;s 61 launches in 2022 were primarily devoted
          to building out the Starlink megaconstellation, which consists of more
          than 3,300 operational satellites (and counting).
        </p>
        <p>
          Spacex achieved the most orbital launches of a single rocket model
          without failure (120 Falcon 9 launches, 21 April 2022)
        </p>
      </>
    ),
    src: "space.com (Spacex celebrates 2022 61 launches)",
    image: "https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg"
  }
}

export default yearMapping
