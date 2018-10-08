import React, { Component } from "react";
import BasicTypeAhead from "./components/BasicTypeAhead/BasicTypeAhead";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <section className="center">
          <h2>Save the Date</h2>
          <h1>
            Georgia
            <br />&<br /> Maxwell
          </h1>
          <h3>April 27, 2019</h3>
        </section>
        <section>
          <p className="center">
            To be sure that you receive a formal invite, please search for your
            name below and provide your email:
          </p>
          <BasicTypeAhead placeholder="Search guests ..." />
        </section>
        <section className="center">
          <p>
            <span className="uppercase">Welcome</span> to our website dedicated
            to all you need to know about our wedding celebration! We are very
            excited to share with our loved ones that we are accepting the
            challenge of celebrating as waste-free as possible. At our
            Zero-Waste event, you won't find any plastic, single-use materials,
            or unsustainable practices. We want our wedding to be a time for
            building our lives in love <em>and</em> making the planet a little
            better, one step at a time. We hope you are willing to join us with
            these considerations and we are overjoyed that you are here to
            celebrate with us!
          </p>
          <p>With gratitude,</p>
          <span className="uppercase">Georgia & Maxwell</span>
        </section>
        <section className="center">
          <h2>Location</h2>
          <h3>First Landing State Park</h3>
          <h3>2500 Shore Drive</h3>
          <h3>Virginia Beach, VA 23451</h3>
        </section>
        <section className="center">
          <h2>Schedule</h2>
          <table>
            <tbody>
              <tr>
                <td className="right">4:30 PM</td>
                <td className="left">Cocktail Hour</td>
              </tr>
              <tr>
                <td className="right">5:30 PM</td>
                <td className="left">Nuptials</td>
              </tr>
              <tr>
                <td className="right">6:00 - 9:45 PM</td>
                <td className="left">Dinner & Dancing</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2 className="center">FAQ's</h2>
          <ul>
            <li>
              <strong>Where is this happening again?</strong> First Landing
              State Park, in Virginia Beach, Va. The cocktail hour and dinner
              will be under a tent in The Courtyard surrounded by the Chesapeake
              Bay Education Center/Visitor Center and Camp Store. Our ceremony
              will take place on the bay-side beach just across the dunes from
              The Courtyard.
            </li>
            <li>
              <strong>How do I get there?</strong> First Landing Google Maps
              will bring you to 2500 Shore Drive, Virginia Beach, Va 23451. Both
              entrances to the State Park (East and West of Rt. 60 "Shore
              Drive") will have a Contact Station where you can ask questions or
              directions if you get lost. Just ask for the "Chesapeake Bay
              Education Center."
            </li>
            <li>
              <strong>Can I park there?</strong> Yes! When you enter the parking
              lot, please tell the Park Ranger at the Contact Station that you
              are parking for the Busch/Wyndorf wedding, and they will give you
              a pass to display in your car. That's all you need!
            </li>
            <li>
              <strong>Seriously, do we have to camp-out?</strong> Only if you
              want to! First Landing State Park is adjacent to all of the
              civilization of Virginia Beach, so you can find pretty much any
              accommodation you want: Airbnb's, beach houses, and hotels are all
              available close-by. Ask for off-season prices since most bookings
              increase after Memorial Day. If you want to camp, visit the{" "}
              <a href="http://www.dcr.virginia.gov/state-parks/first-landing#general_information">
                First Landing State Park website
              </a>{" "}
              to make reservations. We have not created a "block" on any hotels
              since there is so much to chose from.
            </li>
            <li>
              <strong>What should I wear?</strong> Anything that makes you
              comfortable! However, we will be walking over a wooden boardwalk
              (approximately 400 feet) in addition to sand, grass, and paved
              surfaces. April in Virginia can bring a mix of weather so shawls,
              jackets, and umbrellas are recommended!
            </li>
            <li>
              <strong>
                I want to get to-and-from the wedding safely, but I'm not
                staying in the State Park. What can I expect for transportation?
              </strong>{" "}
              Uber and Lyft should be readily available to give safe rides. We
              also are big fans of sharing vehicles and using designated drivers
              to carpool! Don't drink and drive! If you are staying in the State
              Park, you should be able to walk to your site/cabin.
            </li>
            <li>
              <strong>
                I have a food allergy, food sensitivity, or limited ingredient
                diet. What will I be able to eat?
              </strong>{" "}
              Please see our buffet menu listed below. We apologize if these
              items don't fit with your preferences- it's difficult to
              accommodate everyone! We really want everyone to be happy, so
              bring your own picnic dinner or chow-down before hand if you need
              to!
            </li>
            <li>
              <strong>
                I usually party past 9:45 pm, why is the wedding over so early?
              </strong>{" "}
              The State Park has a policy that nighttime quiet hours begin at
              10:00 pm. We have been strongly advised to formally end the event
              before then to keep staff and other park users off our backs. In
              the immortal words of Robert Earl Keen Jr., "the road goes on
              forever, and the party never ends" so rest-assured, we will keep
              the party going afterwards!
            </li>
            <li>
              <strong>Where will Hoover and Pickle be?</strong> How kind of you
              to ask! They will be safely tucked in their beds back in our cabin
              after taking a few pictures with us first!
            </li>
            <li>
              <strong>What if I have other questions beyond this list?</strong>{" "}
              You're overthinking it, just come party with us.
            </li>
          </ul>
        </section>
        <section className="center">
          <h2>Menu</h2>
          <div className="menu-section">
            <h3 className="menu-heading">Cocktail Hour</h3>
            <div className="menu-subsection">
              <h4 className="menu-subheading">Artisan Cheese & Charcuterie</h4>
              <p className="menu-text">
                assortment of cheeses, meats, breads and crackers, fresh
                vegetables with lemon ginger hummus, and anitpasti
              </p>
            </div>
            <div className="menu-subsection">
              <h4 className="menu-subheading">Mini Chesapeake Crab Cakes</h4>
              <p className="menu-text">served with cocktail sauce</p>
            </div>
          </div>
          <div>
            <h3 className="menu-heading">Dinner</h3>
            <div className="menu-subsection">
              <h4 className="menu-subheading">Deconstructed Caesar Salad</h4>
              <p className="menu-text">
                romaine, lemon pepper Caesar dressing, Parmesan, croutons
              </p>
            </div>
            <div className="menu-subsection">
              <h4 className="menu-subheading">Chicken Rose</h4>
              <p className="menu-text">
                grilled chicken breast, mushrooms, fire roasted tomato cream
                sauce, bowtie pasta
              </p>
            </div>
            <div className="menu-subsection">
              <h4 className="menu-subheading">White Sea Bass</h4>
              <p className="menu-text">
                with fresh lemon sauce, cranberry and rosemary
              </p>
            </div>
            <div className="menu-subsection">
              <h4 className="menu-subheading">Delmonico Potatoes</h4>
              <p className="menu-text">
                au gratin potatoes with buttered panko crumbs
              </p>
            </div>
            <div className="menu-subsection">
              <h4 className="menu-subheading">Balsamic Vegetables</h4>
              <p className="menu-text">with lemon and olive oil</p>
            </div>
            <div className="menu-subsection">
              <h4 className="menu-subheading">Dinner Rolls</h4>
            </div>
            <div className="menu-subsection">
              <h4 className="menu-subheading">Sweet Tea & Lemonade</h4>
            </div>
          </div>
        </section>
        <section className="center">
          <h2>Gallery</h2>
          <img src="https://lh3.googleusercontent.com/uMa3HPVu01TSFG8FaKriQDcaS4sUy9NI8w7q9ZIz2QdxXGM4abu-1x_Xto4O_6ViWDMOXmHqt0g4P_pWNc1Rx6ij08fifn8S-8vPaPLMUmyXJAKDBG-E1gpvY4OdckpsgrK2LPM3mn6Qnsx6JH91ZO4zRPRP-qPOFICCmVvOthZtp30yXsJIkupIv-q9kvKdb3YHy8eTGcs0hC104SCow1j476QHiD3K34e_xmRCfpnX4mmg-RXG9RpwpTw_JzLvLGPUa9MsgCn7Zkrzn_gwDCJmD96TXSoFZFFurUj-SvDXt73l7DlHcZnuPPdujioWwsLl219M7nYfWsjxyJamprhCcTNNK5Tp8ztOIzV2RF2yHWnhYc_jeRubEe4IgrjdDoikkSNVfPWxQnRRf8bhqVvyAFndKnLUy2y3m45QRwlCx4Y6pas2ndvRpuODdRXp5cDd7FESHde7qKMpmXPO93Cirdva5c07MiGoFcH-WeIO8R11pV014ZqQ0wjPkRl4IG0f9Q-HExs7s75nFeb5bNHCKJvgKPpi4pIsuRJmAl3C31mDRkPQ8N9TsY8pgWL0xLgi5664QbgVUcI1U4BF1Pi-25tc5yGkMALw0veTMufw7A0ApPojY2s0-Z4xrdos4iQNTXBti4Ou-8bAJWKpQaiGtb9rwdYhclGCSz4yTnCmzHHuuD7kPuxzcA=w880-h1176-no" />
          <img src="https://lh3.googleusercontent.com/X_tIaJmXNJuh6E83PCWZ-Cc5BKZOqvf6Otz8ph4Tvze--FXqnwyHaP_JGnMfzGnqESTrYSUnz6EzDeOnErZsWZY2-Qf-xQQwravvP6LyjNZK6KwHk6A6CrPKw22m4E7JmBHME4jUzWHwRLhkoa4SPC6S4iHMFnzHpRNCscoVVRqt-4A-eDgBOL5JhbTWiKr1cpOEy6kAsLdNvK5WlgcETuP-0AZS70o3CMln6LcxsZLT6VF0qg19pjx6NqqXtC_sW3X3o6ZNISOuVEAwJzNHK4B1GlZTuijV_gqplcPKQZRzgiLHMAG0JAlBdI-NObo3r_-Z4ugHieicieVvjlxqKMui1mZiBHrgvEKZRXbomy49EZCIYo3gNKeky3GsfO8wt1q82RhwKCqIicSGpygoW2uYgy9L7lNK-JOKyN8EkvSvnRMZ6ji4wHQSVtGRO_e3d9qiRPbP3S4IsXxvZA2Lc_2L6VBYsrz62TIJTvFusmgjz6CGvAAdLHlUcInviapOdXYdz--DPbon2sed-fRAmKNbN3XBs-eAFJ2p9NINQORxU5EMLkTWCgXsKWzkzeoHUd4chKgVa9mpYjPWKzFGyWMaNcrYGTtmw2IFkSTm-9Suj8cQR0Wza1Cq4pYTfpL4RRROG-dNA4qY1veTgmXIFQFqSwnEXVxOS2NuNRVpI_BWp-AJnU-hlH0bAA=w480-h640-no" />
          <img src="https://lh3.googleusercontent.com/zE14oHh_1MR8kd_MClw2bgyOSA6MRztBVXvE0mFyihHO3deODjf3HE8Ml_ptWUU2GbkwMLozjJyz1Jc7GP81nVCN6KUc1HlkSsKk4QXoWn8ZZwzIQQeh3MF5mmQnmUlCzSrVzUx_9pCsYSlEggLBQQl_Ojd__O1whaBpZBjm-KYYgHyXeS9uII9ZJtdM5M6nZmKAoqX2XavlZ4KTXzm0flBZ9_OB28pG7qhyd7vGPC2eDj1DieZ3SigwS3QWPWNRgz_jNzdwBwWrXvKFQMe6Pv4Q691_9HolB1zTjzPQi2lTUqnWVadbNulvJNEgD3XqzjFp_P35wpybKKwikD4GCnlh4sGYskSsKNLxs1zMBQXKPaVYS9aFCV5_Z1bS9s9d0SVVElqXLAEJcVyvjA44f9t16Tfuymeo943zSUUCU0vFPFy-Y4Am3FuFs5GXor-SIs7MaQdjfojqo8F7NHJy5ZBMcV9rBoNl3gAAmK-uOvddO6YagO3IKftEqLZs9fhymoyuCoLV7VboMuiGra-PokS678r5oP6AoxYQSErvx4cKn7ND8enwTwEFBEsJMISxDXodqfW8TeLR02l5w3wMNiAYsaI5VpNPH6LQ1EDgqJKTZN_JJwyPPmPo75Fm4aZmxZYA3KxwjsUzFYcTxiqlpvDHTCuFxJ6bFsid6iFO-W-1WnP6wr-MbauZsQ=w840-h1176-no" />
          <img src="https://lh3.googleusercontent.com/WVRpW1blNCmOTxCV0gQ3VgQ7NLmFMDMH7w0cwRMLCMMGyzXo26puRwGhCTAOLcOACaRIuGnpdp1aeci28Z5PmpNsiCqDDtiutYIUdHxVg0gJqHVIxeA33srz4vZnAwBUI8Gi2GQ0jcmE9QrInrX6iNW3ZQramBNlDOsKBsF0KNlcJ1F0hehZhxN8Ci-yoalCz_2znplnz5nAmgvuRr98Q00WX2nfj99bbxUdvmTdSTS4ZhHAdKv_NKw4RJVIYp2FaLokoRTJt3FNO0oYUoAkDJW1ERZNUFGKq8z7Nxt5cJbDElJ0OzizIzdjG0b8Q5AKIc6I0cESCWQvn1jNAfC1u47n1z6A5-KZuZlaCdvU35SknwH0z3-6s7_0HdLizUpx_B3zaSpPoowNWjfyxjY5_aof9LQoCq7dgouEo73YxlX-nQkqIVY4PDpTjJgWflJxEkcJcCqpEznhu5-fIBOxPB5TF-tG5b9G5RoJISoE6nI4vmy-PTFlwY5hcF-h2X5gc5JSLtCy7yJvHY8s1Cfqxnmo_zCKK7o8GTkszJTEPWdtXqLIiRKyQhn4DRiLFHLHG244OiV500lpIQiwlMphLDwAkBXSvsgeDoz8EHIhi-J4gQsP4APP7Mu7yT-sRbBncXV7wocpGQwecOxE3C4e9tZazqS7us65uD7GFWwk55lZr_CwURpAK1Ursg=w1568-h1176-no" />
        </section>
      </div>
    );
  }
}

export default App;
