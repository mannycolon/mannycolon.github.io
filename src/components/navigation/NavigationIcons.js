import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SvgIcon from 'material-ui/SvgIcon'

export default class NavigationIcons extends Component {
  render () {
    return (
      <div>
        <ul style={{ listStyleType: 'none', padding: '0px', margin: '0px' }}>
          <li>
            <Link to="/">
              <SvgIcon style={{ top: 0, left: 0, right: 0, height: '37px', width: '37px', cursor: 'pointer', padding: "10px 5px 10px 15px" }} color="#4d4d4e" hoverColor="#bd0826" viewBox="0 0 750 750">
                <path d="M460.462,527.846H325.692c-6.208,0-11.231-5.023-11.231-11.231v-146h-89.846v146c0,6.208-5.023,11.231-11.231,11.231    H78.615c-6.208,0-11.231-5.023-11.231-11.231V292c0-6.208,5.023-11.231,11.231-11.231c6.208,0,11.231,5.023,11.231,11.231v213.385    h112.308v-146c0-6.208,5.023-11.231,11.231-11.231h112.308c6.208,0,11.231,5.023,11.231,11.231v146h112.308V303.231    c0-6.208,5.023-11.231,11.231-11.231c6.208,0,11.231,5.023,11.231,11.231v213.385    C471.692,522.823,466.669,527.846,460.462,527.846z M527.846,292c-2.873,0-5.747-1.097-7.94-3.29L269.538,38.343L19.171,288.71    c-4.387,4.387-11.494,4.387-15.881,0c-4.387-4.387-4.387-11.494,0-15.881L261.598,14.521c4.387-4.387,11.494-4.387,15.881,0    l258.308,258.308c4.387,4.387,4.387,11.494,0,15.881C533.593,290.903,530.72,292,527.846,292z M438,134.769    c-6.208,0-11.231-5.023-11.231-11.231V56.154h-67.385c-6.208,0-11.231-5.023-11.231-11.231s5.023-11.231,11.231-11.231H438    c6.208,0,11.231,5.023,11.231,11.231v78.615C449.231,129.746,444.208,134.769,438,134.769z" />
              </SvgIcon>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <SvgIcon style={{ top: 0, left: 0, right: 0, height: '47px', width: '47px', cursor: 'pointer', padding: "10px 5px 10px 15px" }} color="#4d4d4e" hoverColor="#bd0826" viewBox="0 0 750 750">
                <path d="M66.4,404.2c5,0,9.1-4.1,9.1-9.1v-50.4c0-8,3.5-15.5,9.6-20.5c44.9-36.9,93.5-61.4,102.8-66c4.3-2.1,6.9-6.3,6.9-11.1v-70.9c0-3-1.5-5.9-4-7.5c-6.7-4.5-10.8-12-10.8-20V75.3c0-31.5,25.6-57.1,57.1-57.1h15.8c31.5,0,57.1,25.6,57.1,57.1v73.5c0,8.1-4,15.5-10.8,20c-2.5,1.7-4,4.5-4,7.5v70.9c0,4.8,2.7,9,6.9,11.1c9.3,4.5,58,29.1,102.8,66c6.1,5,9.6,12.5,9.6,20.5v50.4c0,5,4.1,9.1,9.1,9.1s9.1-4.1,9.1-9.1v-50.4c0-13.4-5.9-26-16.3-34.5c-42.5-34.9-88.3-59.2-103.1-66.6v-62.8c9.3-8,14.8-19.6,14.8-32.1V75.3c0-41.5-33.8-75.3-75.3-75.3H237c-41.5,0-75.3,33.8-75.3,75.3v73.5c0,12.4,5.5,24.1,14.8,32.1v62.8c-14.8,7.4-60.6,31.7-103.1,66.6c-10.3,8.5-16.3,21.1-16.3,34.5v50.4C57.4,400.1,61.4,404.2,66.4,404.2z"/>
                <path d="M269.4,258.5c-5,0-9.1,4.1-9.1,9.1c0,4.5-1.9,8.5-5,11.3c-0.6,0.4-1.2,0.8-1.7,1.4c-2.4,1.7-5.4,2.6-8.6,2.6c-8.4,0-15.3-6.9-15.3-15.3c0-5-4.1-9.1-9.1-9.1s-9.1,4.1-9.1,9.1c0,8,2.9,15.4,7.6,21.2l-7.4,170.5c-0.1,2.7,1,5.3,3,7.1l23.3,21.1c1.7,1.6,3.9,2.3,6.1,2.3s4.4-0.8,6.1-2.3l23.7-21.4c2-1.8,3.1-4.4,3-7.1l-7.6-168.5c5.6-6,9.1-14,9.1-22.8C278.5,262.6,274.4,258.5,269.4,258.5z M244.3,468.5l-14.1-12.7l6.7-155.9c2.6,0.7,5.3,1,8.1,1c2.3,0,4.5-0.2,6.7-0.7l7,155.1L244.3,468.5z"/>
              </SvgIcon>
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <SvgIcon style={{ top: 0, left: 0, right: 0, height: '37px', width: '37px', cursor: 'pointer', padding: "10px 5px 10px 15px" }} color="#4d4d4e" hoverColor="#bd0826" viewBox="0 0 750 750">
                <circle cx="53.333" cy="53.333" r="10.667"/>
                <circle cx="96" cy="53.333" r="10.667"/>
                <circle cx="138.667" cy="53.333" r="10.667"/>
                <path d="M188.167,301.146L134,256l54.167-45.146c4.521-3.771,5.135-10.5,1.365-15.021c-3.781-4.5-10.479-5.146-15.031-1.354     l-64,53.333c-2.427,2.021-3.833,5.021-3.833,8.188s1.406,6.167,3.833,8.188l64,53.333c2,1.667,4.417,2.479,6.823,2.479     c3.063,0,6.094-1.313,8.208-3.833C193.302,311.646,192.688,304.917,188.167,301.146z"/>
                <path d="M279.802,316.167c2.115,2.521,5.146,3.833,8.208,3.833c2.406,0,4.823-0.813,6.823-2.479l64-53.333     c2.427-2.021,3.833-5.021,3.833-8.188s-1.406-6.167-3.833-8.188l-64-53.333c-4.531-3.792-11.24-3.146-15.031,1.354     c-3.771,4.521-3.156,11.25,1.365,15.021L335.333,256l-54.167,45.146C276.646,304.917,276.031,311.646,279.802,316.167z"/>
                <path d="M270.865,171.521c-5.385-2.292-11.688,0.188-14,5.604l-64,149.333c-2.323,5.417,0.188,11.688,5.604,14.021     c1.365,0.583,2.792,0.854,4.198,0.854c4.135,0,8.073-2.417,9.802-6.458l64-149.333     C278.792,180.125,276.281,173.854,270.865,171.521z"/>
                <path d="M503.927,362.979l-20.438-5.104l10.833-18.042c2.521-4.208,1.854-9.583-1.604-13.042l-23.385-23.385V42.667     C469.333,19.146,450.198,0,426.667,0h-384C19.135,0,0,19.146,0,42.667v384c0,23.521,19.135,42.667,42.667,42.667h260.74     l23.375,23.375c3.448,3.458,8.813,4.104,13.031,1.604l18.063-10.833l5.115,20.438c1.188,4.75,5.448,8.083,10.344,8.083H416     c4.896,0,9.156-3.333,10.344-8.083l5.115-20.438l18.063,10.833c4.198,2.521,9.573,1.854,13.031-1.604l30.167-30.167     c3.458-3.458,4.125-8.833,1.604-13.042l-10.833-18.042l20.438-5.104c4.74-1.188,8.073-5.458,8.073-10.354v-42.667     C512,368.438,508.667,364.167,503.927,362.979z M21.333,42.667c0-11.771,9.573-21.333,21.333-21.333h384     c11.76,0,21.333,9.563,21.333,21.333v42.667H21.333V42.667z M295.911,448H42.667c-11.76,0-21.333-9.563-21.333-21.333v-320H448     v189.267l-16.542,9.921l-5.115-20.438c-1.188-4.75-5.448-8.083-10.344-8.083h-42.667c-4.896,0-9.156,3.333-10.344,8.083     l-5.115,20.438l-18.063-10.833c-4.208-2.521-9.583-1.875-13.031,1.604l-30.167,30.167c-3.458,3.458-4.125,8.833-1.604,13.042     l10.833,18.042l-20.438,5.104c-4.74,1.188-8.073,5.458-8.073,10.354V416c0,4.896,3.333,9.167,8.073,10.354l20.438,5.104     L295.911,448z M490.667,407.667l-18.323,4.583c-3.479,0.875-6.292,3.438-7.479,6.833c-0.948,2.729-1.99,5.396-3.25,7.979     c-1.573,3.25-1.406,7.063,0.448,10.167l9.677,16.125l-18.385,18.375l-16.135-9.667c-3.094-1.875-6.927-2.042-10.156-0.458     c-2.594,1.271-5.271,2.313-8.01,3.271c-3.375,1.188-5.927,4-6.792,7.479l-4.583,18.313h-26.021l-4.583-18.313     c-0.865-3.479-3.417-6.292-6.792-7.479c-2.74-0.958-5.417-2-8.01-3.271c-3.24-1.563-7.063-1.417-10.156,0.458l-16.135,9.667     l-18.385-18.375l9.677-16.125c1.854-3.104,2.021-6.917,0.448-10.167c-1.26-2.583-2.302-5.25-3.25-7.979     c-1.188-3.396-4-5.958-7.479-6.833l-18.323-4.583v-26l18.323-4.583c3.479-0.875,6.292-3.438,7.479-6.833     c0.948-2.729,1.99-5.396,3.25-7.979c1.573-3.25,1.406-7.063-0.448-10.167l-9.677-16.125l18.385-18.375l16.135,9.667     c3.094,1.854,6.896,2,10.156,0.458c2.594-1.271,5.271-2.313,8.01-3.271c3.375-1.188,5.927-4,6.792-7.479l4.583-18.313h26.021     l4.583,18.313c0.865,3.479,3.417,6.292,6.792,7.479c2.74,0.958,5.417,2,8.01,3.271c3.24,1.542,7.063,1.417,10.156-0.458     l16.135-9.667l18.385,18.375l-9.677,16.125c-1.854,3.104-2.021,6.917-0.448,10.167c1.26,2.583,2.302,5.25,3.25,7.979     c1.188,3.396,4,5.958,7.479,6.833l18.323,4.583V407.667z"/>
                <path d="M394.667,341.333c-29.406,0-53.333,23.917-53.333,53.333S365.26,448,394.667,448S448,424.083,448,394.667     S424.073,341.333,394.667,341.333z M394.667,426.667c-17.646,0-32-14.354-32-32s14.354-32,32-32s32,14.354,32,32     S412.313,426.667,394.667,426.667z"/>
              </SvgIcon>
            </Link>
          </li>
          <li>
            <Link to="/mywork">
              <SvgIcon style={{ top: 0, left: 0, right: 0, height: '37px', width: '37px', cursor: 'pointer', padding: "10px 5px 10px 15px" }} color="#4d4d4e" hoverColor="#bd0826" viewBox="0 0 750 750">
                <path d="M488.727,279.273c-6.982,0-11.636,4.655-11.636,11.636v151.273c0,6.982-4.655,11.636-11.636,11.636H46.545    c-6.982,0-11.636-4.655-11.636-11.636V290.909c0-6.982-4.655-11.636-11.636-11.636s-11.636,4.655-11.636,11.636v151.273    c0,19.782,15.127,34.909,34.909,34.909h418.909c19.782,0,34.909-15.127,34.909-34.909V290.909    C500.364,283.927,495.709,279.273,488.727,279.273z"/>
                <path d="M477.091,116.364H34.909C15.127,116.364,0,131.491,0,151.273v74.473C0,242.036,11.636,256,26.764,259.491l182.691,40.727    v37.236c0,6.982,4.655,11.636,11.636,11.636h69.818c6.982,0,11.636-4.655,11.636-11.636v-37.236l182.691-40.727    C500.364,256,512,242.036,512,225.745v-74.473C512,131.491,496.873,116.364,477.091,116.364z M279.273,325.818h-46.545v-46.545    h46.545V325.818z M488.727,225.745c0,5.818-3.491,10.473-9.309,11.636l-176.873,39.564v-9.309c0-6.982-4.655-11.636-11.636-11.636    h-69.818c-6.982,0-11.636,4.655-11.636,11.636v9.309L32.582,237.382c-5.818-1.164-9.309-5.818-9.309-11.636v-74.473    c0-6.982,4.655-11.636,11.636-11.636h442.182c6.982,0,11.636,4.655,11.636,11.636V225.745z"/>
                <path d="M314.182,34.909H197.818c-19.782,0-34.909,15.127-34.909,34.909v11.636c0,6.982,4.655,11.636,11.636,11.636    s11.636-4.655,11.636-11.636V69.818c0-6.982,4.655-11.636,11.636-11.636h116.364c6.982,0,11.636,4.655,11.636,11.636v11.636    c0,6.982,4.655,11.636,11.636,11.636c6.982,0,11.636-4.655,11.636-11.636V69.818C349.091,50.036,333.964,34.909,314.182,34.909z"/>
              </SvgIcon>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <SvgIcon style={{ top: 0, left: 0, right: 0, height: '37px', width: '37px', cursor: 'pointer', padding: "10px 5px 10px 15px" }} color="#4d4d4e" hoverColor="#bd0826" viewBox="0 0 750 750">
                <path d="M424.3,57.75H59.1c-32.6,0-59.1,26.5-59.1,59.1v249.6c0,32.6,26.5,59.1,59.1,59.1h365.1c32.6,0,59.1-26.5,59.1-59.1    v-249.5C483.4,84.35,456.9,57.75,424.3,57.75z M456.4,366.45c0,17.7-14.4,32.1-32.1,32.1H59.1c-17.7,0-32.1-14.4-32.1-32.1v-249.5    c0-17.7,14.4-32.1,32.1-32.1h365.1c17.7,0,32.1,14.4,32.1,32.1v249.5H456.4z"/>
                <path d="M304.8,238.55l118.2-106c5.5-5,6-13.5,1-19.1c-5-5.5-13.5-6-19.1-1l-163,146.3l-31.8-28.4c-0.1-0.1-0.2-0.2-0.2-0.3    c-0.7-0.7-1.4-1.3-2.2-1.9L78.3,112.35c-5.6-5-14.1-4.5-19.1,1.1c-5,5.6-4.5,14.1,1.1,19.1l119.6,106.9L60.8,350.95    c-5.4,5.1-5.7,13.6-0.6,19.1c2.7,2.8,6.3,4.3,9.9,4.3c3.3,0,6.6-1.2,9.2-3.6l120.9-113.1l32.8,29.3c2.6,2.3,5.8,3.4,9,3.4    c3.2,0,6.5-1.2,9-3.5l33.7-30.2l120.2,114.2c2.6,2.5,6,3.7,9.3,3.7c3.6,0,7.1-1.4,9.8-4.2c5.1-5.4,4.9-14-0.5-19.1L304.8,238.55z"/>
              </SvgIcon>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
