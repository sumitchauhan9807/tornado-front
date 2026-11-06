const ContactForm = (props) => {
  return (
   <div className="pt-16 md:pt-24">
      <section   className="container py-10 md:py-14 lg:py-16">
       <div style={{background:"#7A17F4"}} className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-purple-600 to-[hsl(258_75%_38%)] p-8 md:p-14">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(0_0%_100%/0.18),transparent_60%)]" />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            <div style={{marginBottom:"16%"}} className="lg:col-span-7">
              <h2 className="mt-4 font-display text-[clamp(1.75rem,3.4vw,3rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white text-balance">{props.heading}</h2>
              <p className="mt-4 max-w-xl text-[15px] leading-[1.65] text-white/85">{props.subText}</p>
            </div>
            <div className="lg:col-span-5">
              <div className="space-y-2.5">
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <div>
                    <input name="name" required maxLength={30} placeholder="Full name" aria-label="Full name" aria-invalid="false" className="w-full rounded-lg border border-white/25 bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/55 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"  />
                  </div>
                  <div>
                    <div className="relative ">
                      <div className="relative">
                        <input id="email" name="email" type="email" required placeholder="Work email" className="w-full rounded-lg border border-white/25 bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/55 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20" aria-invalid="false"  style={{ paddingRight: '110px' }} />
                        <button style={{top:"78%"}} type="button" disabled className="absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[11.5px] font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-white text-accent hover:bg-white/90" aria-label="Verify email">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-3 w-3">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                          Verify
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <div>
                    <input name="company"  maxLength={120} autoComplete="organization" placeholder="Company name" aria-label="Company" aria-invalid="false" className="w-full rounded-lg border border-white/25 bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/55 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20" />
                  </div>
                  <div>
                    <div className="ttc-phone-field ttc-phone-field--accent " data-required="true">
                      <div className="PhoneInput">
                        <div className="PhoneInputCountry">
                          <select aria-label="Phone number country" className="PhoneInputCountrySelect">
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Åland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AC">Ascension Island</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia</option>
                            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">Congo, Democratic Republic of the</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Cote d'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CW">Curaçao</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">Falkland Islands</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FM">Federated States of Micronesia</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="VA">Holy See (Vatican City State)</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KI">Kiribati</option>
                            <option value="XK">Kosovo</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Laos</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="MD">Moldova</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="KP">North Korea</option>
                            <option value="MK">North Macedonia</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">Palestine</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Reunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russia</option>
                            <option value="RW">Rwanda</option>
                            <option value="BL">Saint Barthélemy</option>
                            <option value="SH">Saint Helena</option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="MF">Saint Martin (French Part)</option>
                            <option value="PM">Saint Pierre and Miquelon</option>
                            <option value="VC">Saint Vincent and the Grenadines</option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Principe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SX">Sint Maarten</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="KR">South Korea</option>
                            <option value="SS">South Sudan</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syria</option>
                            <option value="TW">Taiwan</option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">Tanzania</option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TA">Tristan da Cunha</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">Venezuela</option>
                            <option value="VN">Vietnam</option>
                            <option value="VG">Virgin Islands, British</option>
                            <option value="VI">Virgin Islands, U.S.</option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                          </select>
                          <div aria-hidden="true" className="PhoneInputCountryIcon PhoneInputCountryIcon--border">
                            <img className="PhoneInputCountryIconImg" alt="India" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg" />
                          </div>
                          <div className="PhoneInputCountrySelectArrow" />
                        </div>
                        <input type="tel" autoComplete="tel" placeholder="Phone number" aria-label="Phone number" className="PhoneInputInput" defaultValue={+91} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <div>
                    <select id="ilf-need" name="ilf-need" required aria-label="What do you need?" aria-invalid="false" className="w-full rounded-lg border border-white/25 bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/55 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20">
                      <option selected value disabled className="text-ink bg-surface">
                        What do you need?
                      </option>
                      <option value="Wholesale / carrier voice" className="text-ink bg-surface">
                        Wholesale / carrier voice
                      </option>
                      <option value="Phone numbers (DID / toll-free)" className="text-ink bg-surface">
                        Phone numbers (DID / toll-free)
                      </option>
                      <option value="Contact center voice" className="text-ink bg-surface">
                        Contact center voice
                      </option>
                      <option value="Cloud PBX / 3CX" className="text-ink bg-surface">
                        Cloud PBX / 3CX
                      </option>
                      <option value="SIP trunks" className="text-ink bg-surface">
                        SIP trunks
                      </option>
                      <option value="Vora AI voice agent" className="text-ink bg-surface">
                        Vora AI voice agent
                      </option>
                      <option value="Bring my own AI agent (SIP)" className="text-ink bg-surface">
                        Bring my own AI agent (SIP)
                      </option>
                      <option value="Other" className="text-ink bg-surface">
                        Other
                      </option>
                    </select>
                  </div>
                  <div>
                    <select id="ilf-country" name="ilf-country" required aria-label="Country" aria-invalid="false" className="w-full rounded-lg border border-white/25 bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/55 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20">
                      <option selected value disabled className="text-ink bg-surface">
                        Country
                      </option>
                      <option value="Afghanistan" className="text-ink bg-surface">
                        Afghanistan
                      </option>
                      <option value="Åland Islands" className="text-ink bg-surface">
                        Åland Islands
                      </option>
                      <option value="Albania" className="text-ink bg-surface">
                        Albania
                      </option>
                      <option value="Algeria" className="text-ink bg-surface">
                        Algeria
                      </option>
                      <option value="American Samoa" className="text-ink bg-surface">
                        American Samoa
                      </option>
                      <option value="Andorra" className="text-ink bg-surface">
                        Andorra
                      </option>
                      <option value="Angola" className="text-ink bg-surface">
                        Angola
                      </option>
                      <option value="Anguilla" className="text-ink bg-surface">
                        Anguilla
                      </option>
                      <option value="Antigua & Barbuda" className="text-ink bg-surface">
                        Antigua &amp; Barbuda
                      </option>
                      <option value="Argentina" className="text-ink bg-surface">
                        Argentina
                      </option>
                      <option value="Armenia" className="text-ink bg-surface">
                        Armenia
                      </option>
                      <option value="Aruba" className="text-ink bg-surface">
                        Aruba
                      </option>
                      <option value="Ascension Island" className="text-ink bg-surface">
                        Ascension Island
                      </option>
                      <option value="Australia" className="text-ink bg-surface">
                        Australia
                      </option>
                      <option value="Austria" className="text-ink bg-surface">
                        Austria
                      </option>
                      <option value="Azerbaijan" className="text-ink bg-surface">
                        Azerbaijan
                      </option>
                      <option value="Bahamas" className="text-ink bg-surface">
                        Bahamas
                      </option>
                      <option value="Bahrain" className="text-ink bg-surface">
                        Bahrain
                      </option>
                      <option value="Bangladesh" className="text-ink bg-surface">
                        Bangladesh
                      </option>
                      <option value="Barbados" className="text-ink bg-surface">
                        Barbados
                      </option>
                      <option value="Belarus" className="text-ink bg-surface">
                        Belarus
                      </option>
                      <option value="Belgium" className="text-ink bg-surface">
                        Belgium
                      </option>
                      <option value="Belize" className="text-ink bg-surface">
                        Belize
                      </option>
                      <option value="Benin" className="text-ink bg-surface">
                        Benin
                      </option>
                      <option value="Bermuda" className="text-ink bg-surface">
                        Bermuda
                      </option>
                      <option value="Bhutan" className="text-ink bg-surface">
                        Bhutan
                      </option>
                      <option value="Bolivia" className="text-ink bg-surface">
                        Bolivia
                      </option>
                      <option value="Bosnia & Herzegovina" className="text-ink bg-surface">
                        Bosnia &amp; Herzegovina
                      </option>
                      <option value="Botswana" className="text-ink bg-surface">
                        Botswana
                      </option>
                      <option value="Brazil" className="text-ink bg-surface">
                        Brazil
                      </option>
                      <option value="British Indian Ocean Territory" className="text-ink bg-surface">
                        British Indian Ocean Territory
                      </option>
                      <option value="British Virgin Islands" className="text-ink bg-surface">
                        British Virgin Islands
                      </option>
                      <option value="Brunei" className="text-ink bg-surface">
                        Brunei
                      </option>
                      <option value="Bulgaria" className="text-ink bg-surface">
                        Bulgaria
                      </option>
                      <option value="Burkina Faso" className="text-ink bg-surface">
                        Burkina Faso
                      </option>
                      <option value="Burundi" className="text-ink bg-surface">
                        Burundi
                      </option>
                      <option value="Cambodia" className="text-ink bg-surface">
                        Cambodia
                      </option>
                      <option value="Cameroon" className="text-ink bg-surface">
                        Cameroon
                      </option>
                      <option value="Canada" className="text-ink bg-surface">
                        Canada
                      </option>
                      <option value="Cape Verde" className="text-ink bg-surface">
                        Cape Verde
                      </option>
                      <option value="Caribbean Netherlands" className="text-ink bg-surface">
                        Caribbean Netherlands
                      </option>
                      <option value="Cayman Islands" className="text-ink bg-surface">
                        Cayman Islands
                      </option>
                      <option value="Central African Republic" className="text-ink bg-surface">
                        Central African Republic
                      </option>
                      <option value="Chad" className="text-ink bg-surface">
                        Chad
                      </option>
                      <option value="Chile" className="text-ink bg-surface">
                        Chile
                      </option>
                      <option value="China" className="text-ink bg-surface">
                        China
                      </option>
                      <option value="Christmas Island" className="text-ink bg-surface">
                        Christmas Island
                      </option>
                      <option value="Cocos (Keeling) Islands" className="text-ink bg-surface">
                        Cocos (Keeling) Islands
                      </option>
                      <option value="Colombia" className="text-ink bg-surface">
                        Colombia
                      </option>
                      <option value="Comoros" className="text-ink bg-surface">
                        Comoros
                      </option>
                      <option value="Congo - Brazzaville" className="text-ink bg-surface">
                        Congo - Brazzaville
                      </option>
                      <option value="Congo - Kinshasa" className="text-ink bg-surface">
                        Congo - Kinshasa
                      </option>
                      <option value="Cook Islands" className="text-ink bg-surface">
                        Cook Islands
                      </option>
                      <option value="Costa Rica" className="text-ink bg-surface">
                        Costa Rica
                      </option>
                      <option value="Côte d’Ivoire" className="text-ink bg-surface">
                        Côte d’Ivoire
                      </option>
                      <option value="Croatia" className="text-ink bg-surface">
                        Croatia
                      </option>
                      <option value="Cuba" className="text-ink bg-surface">
                        Cuba
                      </option>
                      <option value="Curaçao" className="text-ink bg-surface">
                        Curaçao
                      </option>
                      <option value="Cyprus" className="text-ink bg-surface">
                        Cyprus
                      </option>
                      <option value="Czechia" className="text-ink bg-surface">
                        Czechia
                      </option>
                      <option value="Denmark" className="text-ink bg-surface">
                        Denmark
                      </option>
                      <option value="Djibouti" className="text-ink bg-surface">
                        Djibouti
                      </option>
                      <option value="Dominica" className="text-ink bg-surface">
                        Dominica
                      </option>
                      <option value="Dominican Republic" className="text-ink bg-surface">
                        Dominican Republic
                      </option>
                      <option value="Ecuador" className="text-ink bg-surface">
                        Ecuador
                      </option>
                      <option value="Egypt" className="text-ink bg-surface">
                        Egypt
                      </option>
                      <option value="El Salvador" className="text-ink bg-surface">
                        El Salvador
                      </option>
                      <option value="Equatorial Guinea" className="text-ink bg-surface">
                        Equatorial Guinea
                      </option>
                      <option value="Eritrea" className="text-ink bg-surface">
                        Eritrea
                      </option>
                      <option value="Estonia" className="text-ink bg-surface">
                        Estonia
                      </option>
                      <option value="Eswatini" className="text-ink bg-surface">
                        Eswatini
                      </option>
                      <option value="Ethiopia" className="text-ink bg-surface">
                        Ethiopia
                      </option>
                      <option value="Falkland Islands (Islas Malvinas)" className="text-ink bg-surface">
                        Falkland Islands (Islas Malvinas)
                      </option>
                      <option value="Faroe Islands" className="text-ink bg-surface">
                        Faroe Islands
                      </option>
                      <option value="Fiji" className="text-ink bg-surface">
                        Fiji
                      </option>
                      <option value="Finland" className="text-ink bg-surface">
                        Finland
                      </option>
                      <option value="France" className="text-ink bg-surface">
                        France
                      </option>
                      <option value="French Guiana" className="text-ink bg-surface">
                        French Guiana
                      </option>
                      <option value="French Polynesia" className="text-ink bg-surface">
                        French Polynesia
                      </option>
                      <option value="Gabon" className="text-ink bg-surface">
                        Gabon
                      </option>
                      <option value="Gambia" className="text-ink bg-surface">
                        Gambia
                      </option>
                      <option value="Georgia" className="text-ink bg-surface">
                        Georgia
                      </option>
                      <option value="Germany" className="text-ink bg-surface">
                        Germany
                      </option>
                      <option value="Ghana" className="text-ink bg-surface">
                        Ghana
                      </option>
                      <option value="Gibraltar" className="text-ink bg-surface">
                        Gibraltar
                      </option>
                      <option value="Greece" className="text-ink bg-surface">
                        Greece
                      </option>
                      <option value="Greenland" className="text-ink bg-surface">
                        Greenland
                      </option>
                      <option value="Grenada" className="text-ink bg-surface">
                        Grenada
                      </option>
                      <option value="Guadeloupe" className="text-ink bg-surface">
                        Guadeloupe
                      </option>
                      <option value="Guam" className="text-ink bg-surface">
                        Guam
                      </option>
                      <option value="Guatemala" className="text-ink bg-surface">
                        Guatemala
                      </option>
                      <option value="Guernsey" className="text-ink bg-surface">
                        Guernsey
                      </option>
                      <option value="Guinea" className="text-ink bg-surface">
                        Guinea
                      </option>
                      <option value="Guinea-Bissau" className="text-ink bg-surface">
                        Guinea-Bissau
                      </option>
                      <option value="Guyana" className="text-ink bg-surface">
                        Guyana
                      </option>
                      <option value="Haiti" className="text-ink bg-surface">
                        Haiti
                      </option>
                      <option value="Honduras" className="text-ink bg-surface">
                        Honduras
                      </option>
                      <option value="Hong Kong" className="text-ink bg-surface">
                        Hong Kong
                      </option>
                      <option value="Hungary" className="text-ink bg-surface">
                        Hungary
                      </option>
                      <option value="Iceland" className="text-ink bg-surface">
                        Iceland
                      </option>
                      <option value="India" className="text-ink bg-surface">
                        India
                      </option>
                      <option value="Indonesia" className="text-ink bg-surface">
                        Indonesia
                      </option>
                      <option value="Iran" className="text-ink bg-surface">
                        Iran
                      </option>
                      <option value="Iraq" className="text-ink bg-surface">
                        Iraq
                      </option>
                      <option value="Ireland" className="text-ink bg-surface">
                        Ireland
                      </option>
                      <option value="Isle of Man" className="text-ink bg-surface">
                        Isle of Man
                      </option>
                      <option value="Israel" className="text-ink bg-surface">
                        Israel
                      </option>
                      <option value="Italy" className="text-ink bg-surface">
                        Italy
                      </option>
                      <option value="Jamaica" className="text-ink bg-surface">
                        Jamaica
                      </option>
                      <option value="Japan" className="text-ink bg-surface">
                        Japan
                      </option>
                      <option value="Jersey" className="text-ink bg-surface">
                        Jersey
                      </option>
                      <option value="Jordan" className="text-ink bg-surface">
                        Jordan
                      </option>
                      <option value="Kazakhstan" className="text-ink bg-surface">
                        Kazakhstan
                      </option>
                      <option value="Kiribati" className="text-ink bg-surface">
                        Kiribati
                      </option>
                      <option value="Kosovo" className="text-ink bg-surface">
                        Kosovo
                      </option>
                      <option value="Kuwait" className="text-ink bg-surface">
                        Kuwait
                      </option>
                      <option value="Kyrgyzstan" className="text-ink bg-surface">
                        Kyrgyzstan
                      </option>
                      <option value="Laos" className="text-ink bg-surface">
                        Laos
                      </option>
                      <option value="Latvia" className="text-ink bg-surface">
                        Latvia
                      </option>
                      <option value="Lebanon" className="text-ink bg-surface">
                        Lebanon
                      </option>
                      <option value="Lesotho" className="text-ink bg-surface">
                        Lesotho
                      </option>
                      <option value="Liberia" className="text-ink bg-surface">
                        Liberia
                      </option>
                      <option value="Libya" className="text-ink bg-surface">
                        Libya
                      </option>
                      <option value="Liechtenstein" className="text-ink bg-surface">
                        Liechtenstein
                      </option>
                      <option value="Lithuania" className="text-ink bg-surface">
                        Lithuania
                      </option>
                      <option value="Luxembourg" className="text-ink bg-surface">
                        Luxembourg
                      </option>
                      <option value="Macao" className="text-ink bg-surface">
                        Macao
                      </option>
                      <option value="Madagascar" className="text-ink bg-surface">
                        Madagascar
                      </option>
                      <option value="Malawi" className="text-ink bg-surface">
                        Malawi
                      </option>
                      <option value="Malaysia" className="text-ink bg-surface">
                        Malaysia
                      </option>
                      <option value="Maldives" className="text-ink bg-surface">
                        Maldives
                      </option>
                      <option value="Mali" className="text-ink bg-surface">
                        Mali
                      </option>
                      <option value="Malta" className="text-ink bg-surface">
                        Malta
                      </option>
                      <option value="Marshall Islands" className="text-ink bg-surface">
                        Marshall Islands
                      </option>
                      <option value="Martinique" className="text-ink bg-surface">
                        Martinique
                      </option>
                      <option value="Mauritania" className="text-ink bg-surface">
                        Mauritania
                      </option>
                      <option value="Mauritius" className="text-ink bg-surface">
                        Mauritius
                      </option>
                      <option value="Mayotte" className="text-ink bg-surface">
                        Mayotte
                      </option>
                      <option value="Mexico" className="text-ink bg-surface">
                        Mexico
                      </option>
                      <option value="Micronesia" className="text-ink bg-surface">
                        Micronesia
                      </option>
                      <option value="Moldova" className="text-ink bg-surface">
                        Moldova
                      </option>
                      <option value="Monaco" className="text-ink bg-surface">
                        Monaco
                      </option>
                      <option value="Mongolia" className="text-ink bg-surface">
                        Mongolia
                      </option>
                      <option value="Montenegro" className="text-ink bg-surface">
                        Montenegro
                      </option>
                      <option value="Montserrat" className="text-ink bg-surface">
                        Montserrat
                      </option>
                      <option value="Morocco" className="text-ink bg-surface">
                        Morocco
                      </option>
                      <option value="Mozambique" className="text-ink bg-surface">
                        Mozambique
                      </option>
                      <option value="Myanmar (Burma)" className="text-ink bg-surface">
                        Myanmar (Burma)
                      </option>
                      <option value="Namibia" className="text-ink bg-surface">
                        Namibia
                      </option>
                      <option value="Nauru" className="text-ink bg-surface">
                        Nauru
                      </option>
                      <option value="Nepal" className="text-ink bg-surface">
                        Nepal
                      </option>
                      <option value="Netherlands" className="text-ink bg-surface">
                        Netherlands
                      </option>
                      <option value="New Caledonia" className="text-ink bg-surface">
                        New Caledonia
                      </option>
                      <option value="New Zealand" className="text-ink bg-surface">
                        New Zealand
                      </option>
                      <option value="Nicaragua" className="text-ink bg-surface">
                        Nicaragua
                      </option>
                      <option value="Niger" className="text-ink bg-surface">
                        Niger
                      </option>
                      <option value="Nigeria" className="text-ink bg-surface">
                        Nigeria
                      </option>
                      <option value="Niue" className="text-ink bg-surface">
                        Niue
                      </option>
                      <option value="Norfolk Island" className="text-ink bg-surface">
                        Norfolk Island
                      </option>
                      <option value="North Korea" className="text-ink bg-surface">
                        North Korea
                      </option>
                      <option value="North Macedonia" className="text-ink bg-surface">
                        North Macedonia
                      </option>
                      <option value="Northern Mariana Islands" className="text-ink bg-surface">
                        Northern Mariana Islands
                      </option>
                      <option value="Norway" className="text-ink bg-surface">
                        Norway
                      </option>
                      <option value="Oman" className="text-ink bg-surface">
                        Oman
                      </option>
                      <option value="Pakistan" className="text-ink bg-surface">
                        Pakistan
                      </option>
                      <option value="Palau" className="text-ink bg-surface">
                        Palau
                      </option>
                      <option value="Palestine" className="text-ink bg-surface">
                        Palestine
                      </option>
                      <option value="Panama" className="text-ink bg-surface">
                        Panama
                      </option>
                      <option value="Papua New Guinea" className="text-ink bg-surface">
                        Papua New Guinea
                      </option>
                      <option value="Paraguay" className="text-ink bg-surface">
                        Paraguay
                      </option>
                      <option value="Peru" className="text-ink bg-surface">
                        Peru
                      </option>
                      <option value="Philippines" className="text-ink bg-surface">
                        Philippines
                      </option>
                      <option value="Poland" className="text-ink bg-surface">
                        Poland
                      </option>
                      <option value="Portugal" className="text-ink bg-surface">
                        Portugal
                      </option>
                      <option value="Puerto Rico" className="text-ink bg-surface">
                        Puerto Rico
                      </option>
                      <option value="Qatar" className="text-ink bg-surface">
                        Qatar
                      </option>
                      <option value="Réunion" className="text-ink bg-surface">
                        Réunion
                      </option>
                      <option value="Romania" className="text-ink bg-surface">
                        Romania
                      </option>
                      <option value="Russia" className="text-ink bg-surface">
                        Russia
                      </option>
                      <option value="Rwanda" className="text-ink bg-surface">
                        Rwanda
                      </option>
                      <option value="Samoa" className="text-ink bg-surface">
                        Samoa
                      </option>
                      <option value="San Marino" className="text-ink bg-surface">
                        San Marino
                      </option>
                      <option value="São Tomé & Príncipe" className="text-ink bg-surface">
                        São Tomé &amp; Príncipe
                      </option>
                      <option value="Saudi Arabia" className="text-ink bg-surface">
                        Saudi Arabia
                      </option>
                      <option value="Senegal" className="text-ink bg-surface">
                        Senegal
                      </option>
                      <option value="Serbia" className="text-ink bg-surface">
                        Serbia
                      </option>
                      <option value="Seychelles" className="text-ink bg-surface">
                        Seychelles
                      </option>
                      <option value="Sierra Leone" className="text-ink bg-surface">
                        Sierra Leone
                      </option>
                      <option value="Singapore" className="text-ink bg-surface">
                        Singapore
                      </option>
                      <option value="Sint Maarten" className="text-ink bg-surface">
                        Sint Maarten
                      </option>
                      <option value="Slovakia" className="text-ink bg-surface">
                        Slovakia
                      </option>
                      <option value="Slovenia" className="text-ink bg-surface">
                        Slovenia
                      </option>
                      <option value="Solomon Islands" className="text-ink bg-surface">
                        Solomon Islands
                      </option>
                      <option value="Somalia" className="text-ink bg-surface">
                        Somalia
                      </option>
                      <option value="South Africa" className="text-ink bg-surface">
                        South Africa
                      </option>
                      <option value="South Korea" className="text-ink bg-surface">
                        South Korea
                      </option>
                      <option value="South Sudan" className="text-ink bg-surface">
                        South Sudan
                      </option>
                      <option value="Spain" className="text-ink bg-surface">
                        Spain
                      </option>
                      <option value="Sri Lanka" className="text-ink bg-surface">
                        Sri Lanka
                      </option>
                      <option value="St. Barthélemy" className="text-ink bg-surface">
                        St. Barthélemy
                      </option>
                      <option value="St. Helena" className="text-ink bg-surface">
                        St. Helena
                      </option>
                      <option value="St. Kitts & Nevis" className="text-ink bg-surface">
                        St. Kitts &amp; Nevis
                      </option>
                      <option value="St. Lucia" className="text-ink bg-surface">
                        St. Lucia
                      </option>
                      <option value="St. Martin" className="text-ink bg-surface">
                        St. Martin
                      </option>
                      <option value="St. Pierre & Miquelon" className="text-ink bg-surface">
                        St. Pierre &amp; Miquelon
                      </option>
                      <option value="St. Vincent & Grenadines" className="text-ink bg-surface">
                        St. Vincent &amp; Grenadines
                      </option>
                      <option value="Sudan" className="text-ink bg-surface">
                        Sudan
                      </option>
                      <option value="Suriname" className="text-ink bg-surface">
                        Suriname
                      </option>
                      <option value="Svalbard & Jan Mayen" className="text-ink bg-surface">
                        Svalbard &amp; Jan Mayen
                      </option>
                      <option value="Sweden" className="text-ink bg-surface">
                        Sweden
                      </option>
                      <option value="Switzerland" className="text-ink bg-surface">
                        Switzerland
                      </option>
                      <option value="Syria" className="text-ink bg-surface">
                        Syria
                      </option>
                      <option value="Taiwan" className="text-ink bg-surface">
                        Taiwan
                      </option>
                      <option value="Tajikistan" className="text-ink bg-surface">
                        Tajikistan
                      </option>
                      <option value="Tanzania" className="text-ink bg-surface">
                        Tanzania
                      </option>
                      <option value="Thailand" className="text-ink bg-surface">
                        Thailand
                      </option>
                      <option value="Timor-Leste" className="text-ink bg-surface">
                        Timor-Leste
                      </option>
                      <option value="Togo" className="text-ink bg-surface">
                        Togo
                      </option>
                      <option value="Tokelau" className="text-ink bg-surface">
                        Tokelau
                      </option>
                      <option value="Tonga" className="text-ink bg-surface">
                        Tonga
                      </option>
                      <option value="Trinidad & Tobago" className="text-ink bg-surface">
                        Trinidad &amp; Tobago
                      </option>
                      <option value="Tristan da Cunha" className="text-ink bg-surface">
                        Tristan da Cunha
                      </option>
                      <option value="Tunisia" className="text-ink bg-surface">
                        Tunisia
                      </option>
                      <option value="Türkiye" className="text-ink bg-surface">
                        Türkiye
                      </option>
                      <option value="Turkmenistan" className="text-ink bg-surface">
                        Turkmenistan
                      </option>
                      <option value="Turks & Caicos Islands" className="text-ink bg-surface">
                        Turks &amp; Caicos Islands
                      </option>
                      <option value="Tuvalu" className="text-ink bg-surface">
                        Tuvalu
                      </option>
                      <option value="U.S. Virgin Islands" className="text-ink bg-surface">
                        U.S. Virgin Islands
                      </option>
                      <option value="Uganda" className="text-ink bg-surface">
                        Uganda
                      </option>
                      <option value="Ukraine" className="text-ink bg-surface">
                        Ukraine
                      </option>
                      <option value="United Arab Emirates" className="text-ink bg-surface">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom" className="text-ink bg-surface">
                        United Kingdom
                      </option>
                      <option value="United States" className="text-ink bg-surface">
                        United States
                      </option>
                      <option value="Uruguay" className="text-ink bg-surface">
                        Uruguay
                      </option>
                      <option value="Uzbekistan" className="text-ink bg-surface">
                        Uzbekistan
                      </option>
                      <option value="Vanuatu" className="text-ink bg-surface">
                        Vanuatu
                      </option>
                      <option value="Vatican City" className="text-ink bg-surface">
                        Vatican City
                      </option>
                      <option value="Venezuela" className="text-ink bg-surface">
                        Venezuela
                      </option>
                      <option value="Vietnam" className="text-ink bg-surface">
                        Vietnam
                      </option>
                      <option value="Wallis & Futuna" className="text-ink bg-surface">
                        Wallis &amp; Futuna
                      </option>
                      <option value="Western Sahara" className="text-ink bg-surface">
                        Western Sahara
                      </option>
                      <option value="Yemen" className="text-ink bg-surface">
                        Yemen
                      </option>
                      <option value="Zambia" className="text-ink bg-surface">
                        Zambia
                      </option>
                      <option value="Zimbabwe" className="text-ink bg-surface">
                        Zimbabwe
                      </option>
                    </select>
                  </div>
                </div>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <div>
                    <select id="ilf-volume" name="ilf-volume" aria-label="Monthly volume (optional)" className="w-full rounded-lg border border-white/25 bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/55 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20">
                      <option value className="text-ink bg-surface">
                        Monthly volume
                      </option>
                      <option value="Under 10,000 minutes" className="text-ink bg-surface">
                        Under 10,000 minutes
                      </option>
                      <option value="10,000 to 100,000" className="text-ink bg-surface">
                        10,000 to 100,000
                      </option>
                      <option value="100,000 to 1M" className="text-ink bg-surface">
                        100,000 to 1M
                      </option>
                      <option value="Over 1M" className="text-ink bg-surface">
                        Over 1M
                      </option>
                      <option value="Not sure yet" className="text-ink bg-surface">
                        Not sure yet
                      </option>
                    </select>
                  </div>
                  <div>
                    <select id="ilf-golive" name="ilf-golive" aria-label="Go-live (optional)" className="w-full rounded-lg border border-white/25 bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/55 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20">
                      <option value className="text-ink bg-surface">
                        Go-live
                      </option>
                      <option value="This month" className="text-ink bg-surface">
                        This month
                      </option>
                      <option value="1 to 3 months" className="text-ink bg-surface">
                        1 to 3 months
                      </option>
                      <option value="Later / researching" className="text-ink bg-surface">
                        Later / researching
                      </option>
                    </select>
                  </div>
                </div>
                <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
                  <label htmlFor="ilf-hp">Leave this field empty</label>
                  <input id="ilf-hp" name="company_website" type="text" tabIndex={-1} autoComplete="off" defaultValue />
                </div>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-4">
                  <button type="submit" disabled className="group inline-flex shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-[14px] font-medium text-accent shadow-md transition-all hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed" title="Verify your email first">
                    {props.buttonText}
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </button>
                  <p className="text-[12.5px] text-white/75">
                    Or{' '}
                    <a className="underline decoration-white/40 underline-offset-2 hover:decoration-white" href="/products">
                      see all products
                    </a>
                    .
                  </p>
                </div>
                <p className="text-[12px] text-white/75">We run KYC before opening routes or issuing numbers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactForm;

const Form = () => {
  return (
    <div className="pt-16 md:pt-24">
      <section   className="container py-10 md:py-14 lg:py-16">
       <div style={{background:"#7A17F4"}} className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-purple-600 to-[hsl(258_75%_38%)] p-8 md:p-14">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(0_0%_100%/0.18),transparent_60%)]" />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h2 className="mt-4 font-display text-[clamp(1.75rem,3.4vw,3rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white text-balance">Need a specific area code?</h2>
              <p className="mt-4 max-w-xl text-[15px] leading-[1.65] text-white/85">Tell us the country and city and we'll quote inventory and lead time within the hour.</p>
            </div>
            <div className="lg:col-span-5">
              <div className="space-y-2.5">
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <div>
                    <input name="name" required maxLength={30} placeholder="Full name" aria-label="Full name" aria-invalid="false" className="w-full rounded-lg border border-white/25 bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/55 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"  />
                  </div>
                  <div>
                    <div className="relative ">
                      <div className="relative">
                        <input id="email" name="email" type="email" required placeholder="Work email" className="w-full rounded-lg border border-white/25 bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/55 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20" aria-invalid="false"  style={{ paddingRight: '110px' }} />
                        <button style={{top:"78%"}} type="button" disabled className="absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[11.5px] font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-white text-accent hover:bg-white/90" aria-label="Verify email">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-3 w-3">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                          Verify
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <div>
                    <input name="company"  maxLength={120} autoComplete="organization" placeholder="Company name" aria-label="Company" aria-invalid="false" className="w-full rounded-lg border border-white/25 bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/55 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20" />
                  </div>
                  <div>
                    <div className="ttc-phone-field ttc-phone-field--accent " data-required="true">
                      <div className="PhoneInput">
                        <div className="PhoneInputCountry">
                          <select aria-label="Phone number country" className="PhoneInputCountrySelect">
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Åland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AC">Ascension Island</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia</option>
                            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">Congo, Democratic Republic of the</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Cote d'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CW">Curaçao</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">Falkland Islands</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FM">Federated States of Micronesia</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="VA">Holy See (Vatican City State)</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="XK">Kosovo</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Laos</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="MD">Moldova</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="KP">North Korea</option>
                            <option value="MK">North Macedonia</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">Palestine</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Reunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russia</option>
                            <option value="RW">Rwanda</option>
                            <option value="BL">Saint Barthélemy</option>
                            <option value="SH">Saint Helena</option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="MF">Saint Martin (French Part)</option>
                            <option value="PM">Saint Pierre and Miquelon</option>
                            <option value="VC">Saint Vincent and the Grenadines</option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Principe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SX">Sint Maarten</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="KR">South Korea</option>
                            <option value="SS">South Sudan</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syria</option>
                            <option value="TW">Taiwan</option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">Tanzania</option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TA">Tristan da Cunha</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">Venezuela</option>
                            <option value="VN">Vietnam</option>
                            <option value="VG">Virgin Islands, British</option>
                            <option value="VI">Virgin Islands, U.S.</option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                          </select>
                          <div aria-hidden="true" className="PhoneInputCountryIcon PhoneInputCountryIcon--border">
                            <img className="PhoneInputCountryIconImg" alt="India" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg" />
                          </div>
                          <div className="PhoneInputCountrySelectArrow" />
                        </div>
                        <input type="tel" autoComplete="tel" placeholder="Phone number" aria-label="Phone number" className="PhoneInputInput" defaultValue={+91} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <div>
                    <select id="ilf-need" name="ilf-need" required aria-label="What do you need?" aria-invalid="false" className="w-full rounded-lg border border-white/25 bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/55 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20">
                      <option selected value disabled className="text-ink bg-surface">
                        What do you need?
                      </option>
                      <option value="Wholesale / carrier voice" className="text-ink bg-surface">
                        Wholesale / carrier voice
                      </option>
                      <option value="Phone numbers (DID / toll-free)" className="text-ink bg-surface">
                        Phone numbers (DID / toll-free)
                      </option>
                      <option value="Contact center voice" className="text-ink bg-surface">
                        Contact center voice
                      </option>
                      <option value="Cloud PBX / 3CX" className="text-ink bg-surface">
                        Cloud PBX / 3CX
                      </option>
                      <option value="SIP trunks" className="text-ink bg-surface">
                        SIP trunks
                      </option>
                      <option value="Vora AI voice agent" className="text-ink bg-surface">
                        Vora AI voice agent
                      </option>
                      <option value="Bring my own AI agent (SIP)" className="text-ink bg-surface">
                        Bring my own AI agent (SIP)
                      </option>
                      <option value="Other" className="text-ink bg-surface">
                        Other
                      </option>
                    </select>
                  </div>
                  <div>
                    <select id="ilf-country" name="ilf-country" required aria-label="Country" aria-invalid="false" className="w-full rounded-lg border border-white/25 bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/55 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20">
                      <option selected value disabled className="text-ink bg-surface">
                        Country
                      </option>
                      <option value="Afghanistan" className="text-ink bg-surface">
                        Afghanistan
                      </option>
                      <option value="Åland Islands" className="text-ink bg-surface">
                        Åland Islands
                      </option>
                      <option value="Albania" className="text-ink bg-surface">
                        Albania
                      </option>
                      <option value="Algeria" className="text-ink bg-surface">
                        Algeria
                      </option>
                      <option value="American Samoa" className="text-ink bg-surface">
                        American Samoa
                      </option>
                      <option value="Andorra" className="text-ink bg-surface">
                        Andorra
                      </option>
                      <option value="Angola" className="text-ink bg-surface">
                        Angola
                      </option>
                      <option value="Anguilla" className="text-ink bg-surface">
                        Anguilla
                      </option>
                      <option value="Antigua & Barbuda" className="text-ink bg-surface">
                        Antigua &amp; Barbuda
                      </option>
                      <option value="Argentina" className="text-ink bg-surface">
                        Argentina
                      </option>
                      <option value="Armenia" className="text-ink bg-surface">
                        Armenia
                      </option>
                      <option value="Aruba" className="text-ink bg-surface">
                        Aruba
                      </option>
                      <option value="Ascension Island" className="text-ink bg-surface">
                        Ascension Island
                      </option>
                      <option value="Australia" className="text-ink bg-surface">
                        Australia
                      </option>
                      <option value="Austria" className="text-ink bg-surface">
                        Austria
                      </option>
                      <option value="Azerbaijan" className="text-ink bg-surface">
                        Azerbaijan
                      </option>
                      <option value="Bahamas" className="text-ink bg-surface">
                        Bahamas
                      </option>
                      <option value="Bahrain" className="text-ink bg-surface">
                        Bahrain
                      </option>
                      <option value="Bangladesh" className="text-ink bg-surface">
                        Bangladesh
                      </option>
                      <option value="Barbados" className="text-ink bg-surface">
                        Barbados
                      </option>
                      <option value="Belarus" className="text-ink bg-surface">
                        Belarus
                      </option>
                      <option value="Belgium" className="text-ink bg-surface">
                        Belgium
                      </option>
                      <option value="Belize" className="text-ink bg-surface">
                        Belize
                      </option>
                      <option value="Benin" className="text-ink bg-surface">
                        Benin
                      </option>
                      <option value="Bermuda" className="text-ink bg-surface">
                        Bermuda
                      </option>
                      <option value="Bhutan" className="text-ink bg-surface">
                        Bhutan
                      </option>
                      <option value="Bolivia" className="text-ink bg-surface">
                        Bolivia
                      </option>
                      <option value="Bosnia & Herzegovina" className="text-ink bg-surface">
                        Bosnia &amp; Herzegovina
                      </option>
                      <option value="Botswana" className="text-ink bg-surface">
                        Botswana
                      </option>
                      <option value="Brazil" className="text-ink bg-surface">
                        Brazil
                      </option>
                      <option value="British Indian Ocean Territory" className="text-ink bg-surface">
                        British Indian Ocean Territory
                      </option>
                      <option value="British Virgin Islands" className="text-ink bg-surface">
                        British Virgin Islands
                      </option>
                      <option value="Brunei" className="text-ink bg-surface">
                        Brunei
                      </option>
                      <option value="Bulgaria" className="text-ink bg-surface">
                        Bulgaria
                      </option>
                      <option value="Burkina Faso" className="text-ink bg-surface">
                        Burkina Faso
                      </option>
                      <option value="Burundi" className="text-ink bg-surface">
                        Burundi
                      </option>
                      <option value="Cambodia" className="text-ink bg-surface">
                        Cambodia
                      </option>
                      <option value="Cameroon" className="text-ink bg-surface">
                        Cameroon
                      </option>
                      <option value="Canada" className="text-ink bg-surface">
                        Canada
                      </option>
                      <option value="Cape Verde" className="text-ink bg-surface">
                        Cape Verde
                      </option>
                      <option value="Caribbean Netherlands" className="text-ink bg-surface">
                        Caribbean Netherlands
                      </option>
                      <option value="Cayman Islands" className="text-ink bg-surface">
                        Cayman Islands
                      </option>
                      <option value="Central African Republic" className="text-ink bg-surface">
                        Central African Republic
                      </option>
                      <option value="Chad" className="text-ink bg-surface">
                        Chad
                      </option>
                      <option value="Chile" className="text-ink bg-surface">
                        Chile
                      </option>
                      <option value="China" className="text-ink bg-surface">
                        China
                      </option>
                      <option value="Christmas Island" className="text-ink bg-surface">
                        Christmas Island
                      </option>
                      <option value="Cocos (Keeling) Islands" className="text-ink bg-surface">
                        Cocos (Keeling) Islands
                      </option>
                      <option value="Colombia" className="text-ink bg-surface">
                        Colombia
                      </option>
                      <option value="Comoros" className="text-ink bg-surface">
                        Comoros
                      </option>
                      <option value="Congo - Brazzaville" className="text-ink bg-surface">
                        Congo - Brazzaville
                      </option>
                      <option value="Congo - Kinshasa" className="text-ink bg-surface">
                        Congo - Kinshasa
                      </option>
                      <option value="Cook Islands" className="text-ink bg-surface">
                        Cook Islands
                      </option>
                      <option value="Costa Rica" className="text-ink bg-surface">
                        Costa Rica
                      </option>
                      <option value="Côte d’Ivoire" className="text-ink bg-surface">
                        Côte d’Ivoire
                      </option>
                      <option value="Croatia" className="text-ink bg-surface">
                        Croatia
                      </option>
                      <option value="Cuba" className="text-ink bg-surface">
                        Cuba
                      </option>
                      <option value="Curaçao" className="text-ink bg-surface">
                        Curaçao
                      </option>
                      <option value="Cyprus" className="text-ink bg-surface">
                        Cyprus
                      </option>
                      <option value="Czechia" className="text-ink bg-surface">
                        Czechia
                      </option>
                      <option value="Denmark" className="text-ink bg-surface">
                        Denmark
                      </option>
                      <option value="Djibouti" className="text-ink bg-surface">
                        Djibouti
                      </option>
                      <option value="Dominica" className="text-ink bg-surface">
                        Dominica
                      </option>
                      <option value="Dominican Republic" className="text-ink bg-surface">
                        Dominican Republic
                      </option>
                      <option value="Ecuador" className="text-ink bg-surface">
                        Ecuador
                      </option>
                      <option value="Egypt" className="text-ink bg-surface">
                        Egypt
                      </option>
                      <option value="El Salvador" className="text-ink bg-surface">
                        El Salvador
                      </option>
                      <option value="Equatorial Guinea" className="text-ink bg-surface">
                        Equatorial Guinea
                      </option>
                      <option value="Eritrea" className="text-ink bg-surface">
                        Eritrea
                      </option>
                      <option value="Estonia" className="text-ink bg-surface">
                        Estonia
                      </option>
                      <option value="Eswatini" className="text-ink bg-surface">
                        Eswatini
                      </option>
                      <option value="Ethiopia" className="text-ink bg-surface">
                        Ethiopia
                      </option>
                      <option value="Falkland Islands (Islas Malvinas)" className="text-ink bg-surface">
                        Falkland Islands (Islas Malvinas)
                      </option>
                      <option value="Faroe Islands" className="text-ink bg-surface">
                        Faroe Islands
                      </option>
                      <option value="Fiji" className="text-ink bg-surface">
                        Fiji
                      </option>
                      <option value="Finland" className="text-ink bg-surface">
                        Finland
                      </option>
                      <option value="France" className="text-ink bg-surface">
                        France
                      </option>
                      <option value="French Guiana" className="text-ink bg-surface">
                        French Guiana
                      </option>
                      <option value="French Polynesia" className="text-ink bg-surface">
                        French Polynesia
                      </option>
                      <option value="Gabon" className="text-ink bg-surface">
                        Gabon
                      </option>
                      <option value="Gambia" className="text-ink bg-surface">
                        Gambia
                      </option>
                      <option value="Georgia" className="text-ink bg-surface">
                        Georgia
                      </option>
                      <option value="Germany" className="text-ink bg-surface">
                        Germany
                      </option>
                      <option value="Ghana" className="text-ink bg-surface">
                        Ghana
                      </option>
                      <option value="Gibraltar" className="text-ink bg-surface">
                        Gibraltar
                      </option>
                      <option value="Greece" className="text-ink bg-surface">
                        Greece
                      </option>
                      <option value="Greenland" className="text-ink bg-surface">
                        Greenland
                      </option>
                      <option value="Grenada" className="text-ink bg-surface">
                        Grenada
                      </option>
                      <option value="Guadeloupe" className="text-ink bg-surface">
                        Guadeloupe
                      </option>
                      <option value="Guam" className="text-ink bg-surface">
                        Guam
                      </option>
                      <option value="Guatemala" className="text-ink bg-surface">
                        Guatemala
                      </option>
                      <option value="Guernsey" className="text-ink bg-surface">
                        Guernsey
                      </option>
                      <option value="Guinea" className="text-ink bg-surface">
                        Guinea
                      </option>
                      <option value="Guinea-Bissau" className="text-ink bg-surface">
                        Guinea-Bissau
                      </option>
                      <option value="Guyana" className="text-ink bg-surface">
                        Guyana
                      </option>
                      <option value="Haiti" className="text-ink bg-surface">
                        Haiti
                      </option>
                      <option value="Honduras" className="text-ink bg-surface">
                        Honduras
                      </option>
                      <option value="Hong Kong" className="text-ink bg-surface">
                        Hong Kong
                      </option>
                      <option value="Hungary" className="text-ink bg-surface">
                        Hungary
                      </option>
                      <option value="Iceland" className="text-ink bg-surface">
                        Iceland
                      </option>
                      <option value="India" className="text-ink bg-surface">
                        India
                      </option>
                      <option value="Indonesia" className="text-ink bg-surface">
                        Indonesia
                      </option>
                      <option value="Iran" className="text-ink bg-surface">
                        Iran
                      </option>
                      <option value="Iraq" className="text-ink bg-surface">
                        Iraq
                      </option>
                      <option value="Ireland" className="text-ink bg-surface">
                        Ireland
                      </option>
                      <option value="Isle of Man" className="text-ink bg-surface">
                        Isle of Man
                      </option>
                      <option value="Israel" className="text-ink bg-surface">
                        Israel
                      </option>
                      <option value="Italy" className="text-ink bg-surface">
                        Italy
                      </option>
                      <option value="Jamaica" className="text-ink bg-surface">
                        Jamaica
                      </option>
                      <option value="Japan" className="text-ink bg-surface">
                        Japan
                      </option>
                      <option value="Jersey" className="text-ink bg-surface">
                        Jersey
                      </option>
                      <option value="Jordan" className="text-ink bg-surface">
                        Jordan
                      </option>
                      <option value="Kazakhstan" className="text-ink bg-surface">
                        Kazakhstan
                      </option>
                      <option value="Kenya" className="text-ink bg-surface">
                        Kenya
                      </option>
                      <option value="Kiribati" className="text-ink bg-surface">
                        Kiribati
                      </option>
                      <option value="Kosovo" className="text-ink bg-surface">
                        Kosovo
                      </option>
                      <option value="Kuwait" className="text-ink bg-surface">
                        Kuwait
                      </option>
                      <option value="Kyrgyzstan" className="text-ink bg-surface">
                        Kyrgyzstan
                      </option>
                      <option value="Laos" className="text-ink bg-surface">
                        Laos
                      </option>
                      <option value="Latvia" className="text-ink bg-surface">
                        Latvia
                      </option>
                      <option value="Lebanon" className="text-ink bg-surface">
                        Lebanon
                      </option>
                      <option value="Lesotho" className="text-ink bg-surface">
                        Lesotho
                      </option>
                      <option value="Liberia" className="text-ink bg-surface">
                        Liberia
                      </option>
                      <option value="Libya" className="text-ink bg-surface">
                        Libya
                      </option>
                      <option value="Liechtenstein" className="text-ink bg-surface">
                        Liechtenstein
                      </option>
                      <option value="Lithuania" className="text-ink bg-surface">
                        Lithuania
                      </option>
                      <option value="Luxembourg" className="text-ink bg-surface">
                        Luxembourg
                      </option>
                      <option value="Macao" className="text-ink bg-surface">
                        Macao
                      </option>
                      <option value="Madagascar" className="text-ink bg-surface">
                        Madagascar
                      </option>
                      <option value="Malawi" className="text-ink bg-surface">
                        Malawi
                      </option>
                      <option value="Malaysia" className="text-ink bg-surface">
                        Malaysia
                      </option>
                      <option value="Maldives" className="text-ink bg-surface">
                        Maldives
                      </option>
                      <option value="Mali" className="text-ink bg-surface">
                        Mali
                      </option>
                      <option value="Malta" className="text-ink bg-surface">
                        Malta
                      </option>
                      <option value="Marshall Islands" className="text-ink bg-surface">
                        Marshall Islands
                      </option>
                      <option value="Martinique" className="text-ink bg-surface">
                        Martinique
                      </option>
                      <option value="Mauritania" className="text-ink bg-surface">
                        Mauritania
                      </option>
                      <option value="Mauritius" className="text-ink bg-surface">
                        Mauritius
                      </option>
                      <option value="Mayotte" className="text-ink bg-surface">
                        Mayotte
                      </option>
                      <option value="Mexico" className="text-ink bg-surface">
                        Mexico
                      </option>
                      <option value="Micronesia" className="text-ink bg-surface">
                        Micronesia
                      </option>
                      <option value="Moldova" className="text-ink bg-surface">
                        Moldova
                      </option>
                      <option value="Monaco" className="text-ink bg-surface">
                        Monaco
                      </option>
                      <option value="Mongolia" className="text-ink bg-surface">
                        Mongolia
                      </option>
                      <option value="Montenegro" className="text-ink bg-surface">
                        Montenegro
                      </option>
                      <option value="Montserrat" className="text-ink bg-surface">
                        Montserrat
                      </option>
                      <option value="Morocco" className="text-ink bg-surface">
                        Morocco
                      </option>
                      <option value="Mozambique" className="text-ink bg-surface">
                        Mozambique
                      </option>
                      <option value="Myanmar (Burma)" className="text-ink bg-surface">
                        Myanmar (Burma)
                      </option>
                      <option value="Namibia" className="text-ink bg-surface">
                        Namibia
                      </option>
                      <option value="Nauru" className="text-ink bg-surface">
                        Nauru
                      </option>
                      <option value="Nepal" className="text-ink bg-surface">
                        Nepal
                      </option>
                      <option value="Netherlands" className="text-ink bg-surface">
                        Netherlands
                      </option>
                      <option value="New Caledonia" className="text-ink bg-surface">
                        New Caledonia
                      </option>
                      <option value="New Zealand" className="text-ink bg-surface">
                        New Zealand
                      </option>
                      <option value="Nicaragua" className="text-ink bg-surface">
                        Nicaragua
                      </option>
                      <option value="Niger" className="text-ink bg-surface">
                        Niger
                      </option>
                      <option value="Nigeria" className="text-ink bg-surface">
                        Nigeria
                      </option>
                      <option value="Niue" className="text-ink bg-surface">
                        Niue
                      </option>
                      <option value="Norfolk Island" className="text-ink bg-surface">
                        Norfolk Island
                      </option>
                      <option value="North Korea" className="text-ink bg-surface">
                        North Korea
                      </option>
                      <option value="North Macedonia" className="text-ink bg-surface">
                        North Macedonia
                      </option>
                      <option value="Northern Mariana Islands" className="text-ink bg-surface">
                        Northern Mariana Islands
                      </option>
                      <option value="Norway" className="text-ink bg-surface">
                        Norway
                      </option>
                      <option value="Oman" className="text-ink bg-surface">
                        Oman
                      </option>
                      <option value="Pakistan" className="text-ink bg-surface">
                        Pakistan
                      </option>
                      <option value="Palau" className="text-ink bg-surface">
                        Palau
                      </option>
                      <option value="Palestine" className="text-ink bg-surface">
                        Palestine
                      </option>
                      <option value="Panama" className="text-ink bg-surface">
                        Panama
                      </option>
                      <option value="Papua New Guinea" className="text-ink bg-surface">
                        Papua New Guinea
                      </option>
                      <option value="Paraguay" className="text-ink bg-surface">
                        Paraguay
                      </option>
                      <option value="Peru" className="text-ink bg-surface">
                        Peru
                      </option>
                      <option value="Philippines" className="text-ink bg-surface">
                        Philippines
                      </option>
                      <option value="Poland" className="text-ink bg-surface">
                        Poland
                      </option>
                      <option value="Portugal" className="text-ink bg-surface">
                        Portugal
                      </option>
                      <option value="Puerto Rico" className="text-ink bg-surface">
                        Puerto Rico
                      </option>
                      <option value="Qatar" className="text-ink bg-surface">
                        Qatar
                      </option>
                      <option value="Réunion" className="text-ink bg-surface">
                        Réunion
                      </option>
                      <option value="Romania" className="text-ink bg-surface">
                        Romania
                      </option>
                      <option value="Russia" className="text-ink bg-surface">
                        Russia
                      </option>
                      <option value="Rwanda" className="text-ink bg-surface">
                        Rwanda
                      </option>
                      <option value="Samoa" className="text-ink bg-surface">
                        Samoa
                      </option>
                      <option value="San Marino" className="text-ink bg-surface">
                        San Marino
                      </option>
                      <option value="São Tomé & Príncipe" className="text-ink bg-surface">
                        São Tomé &amp; Príncipe
                      </option>
                      <option value="Saudi Arabia" className="text-ink bg-surface">
                        Saudi Arabia
                      </option>
                      <option value="Senegal" className="text-ink bg-surface">
                        Senegal
                      </option>
                      <option value="Serbia" className="text-ink bg-surface">
                        Serbia
                      </option>
                      <option value="Seychelles" className="text-ink bg-surface">
                        Seychelles
                      </option>
                      <option value="Sierra Leone" className="text-ink bg-surface">
                        Sierra Leone
                      </option>
                      <option value="Singapore" className="text-ink bg-surface">
                        Singapore
                      </option>
                      <option value="Sint Maarten" className="text-ink bg-surface">
                        Sint Maarten
                      </option>
                      <option value="Slovakia" className="text-ink bg-surface">
                        Slovakia
                      </option>
                      <option value="Slovenia" className="text-ink bg-surface">
                        Slovenia
                      </option>
                      <option value="Solomon Islands" className="text-ink bg-surface">
                        Solomon Islands
                      </option>
                      <option value="Somalia" className="text-ink bg-surface">
                        Somalia
                      </option>
                      <option value="South Africa" className="text-ink bg-surface">
                        South Africa
                      </option>
                      <option value="South Korea" className="text-ink bg-surface">
                        South Korea
                      </option>
                      <option value="South Sudan" className="text-ink bg-surface">
                        South Sudan
                      </option>
                      <option value="Spain" className="text-ink bg-surface">
                        Spain
                      </option>
                      <option value="Sri Lanka" className="text-ink bg-surface">
                        Sri Lanka
                      </option>
                      <option value="St. Barthélemy" className="text-ink bg-surface">
                        St. Barthélemy
                      </option>
                      <option value="St. Helena" className="text-ink bg-surface">
                        St. Helena
                      </option>
                      <option value="St. Kitts & Nevis" className="text-ink bg-surface">
                        St. Kitts &amp; Nevis
                      </option>
                      <option value="St. Lucia" className="text-ink bg-surface">
                        St. Lucia
                      </option>
                      <option value="St. Martin" className="text-ink bg-surface">
                        St. Martin
                      </option>
                      <option value="St. Pierre & Miquelon" className="text-ink bg-surface">
                        St. Pierre &amp; Miquelon
                      </option>
                      <option value="St. Vincent & Grenadines" className="text-ink bg-surface">
                        St. Vincent &amp; Grenadines
                      </option>
                      <option value="Sudan" className="text-ink bg-surface">
                        Sudan
                      </option>
                      <option value="Suriname" className="text-ink bg-surface">
                        Suriname
                      </option>
                      <option value="Svalbard & Jan Mayen" className="text-ink bg-surface">
                        Svalbard &amp; Jan Mayen
                      </option>
                      <option value="Sweden" className="text-ink bg-surface">
                        Sweden
                      </option>
                      <option value="Switzerland" className="text-ink bg-surface">
                        Switzerland
                      </option>
                      <option value="Syria" className="text-ink bg-surface">
                        Syria
                      </option>
                      <option value="Taiwan" className="text-ink bg-surface">
                        Taiwan
                      </option>
                      <option value="Tajikistan" className="text-ink bg-surface">
                        Tajikistan
                      </option>
                      <option value="Tanzania" className="text-ink bg-surface">
                        Tanzania
                      </option>
                      <option value="Thailand" className="text-ink bg-surface">
                        Thailand
                      </option>
                      <option value="Timor-Leste" className="text-ink bg-surface">
                        Timor-Leste
                      </option>
                      <option value="Togo" className="text-ink bg-surface">
                        Togo
                      </option>
                      <option value="Tokelau" className="text-ink bg-surface">
                        Tokelau
                      </option>
                      <option value="Tonga" className="text-ink bg-surface">
                        Tonga
                      </option>
                      <option value="Trinidad & Tobago" className="text-ink bg-surface">
                        Trinidad &amp; Tobago
                      </option>
                      <option value="Tristan da Cunha" className="text-ink bg-surface">
                        Tristan da Cunha
                      </option>
                      <option value="Tunisia" className="text-ink bg-surface">
                        Tunisia
                      </option>
                      <option value="Türkiye" className="text-ink bg-surface">
                        Türkiye
                      </option>
                      <option value="Turkmenistan" className="text-ink bg-surface">
                        Turkmenistan
                      </option>
                      <option value="Turks & Caicos Islands" className="text-ink bg-surface">
                        Turks &amp; Caicos Islands
                      </option>
                      <option value="Tuvalu" className="text-ink bg-surface">
                        Tuvalu
                      </option>
                      <option value="U.S. Virgin Islands" className="text-ink bg-surface">
                        U.S. Virgin Islands
                      </option>
                      <option value="Uganda" className="text-ink bg-surface">
                        Uganda
                      </option>
                      <option value="Ukraine" className="text-ink bg-surface">
                        Ukraine
                      </option>
                      <option value="United Arab Emirates" className="text-ink bg-surface">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom" className="text-ink bg-surface">
                        United Kingdom
                      </option>
                      <option value="United States" className="text-ink bg-surface">
                        United States
                      </option>
                      <option value="Uruguay" className="text-ink bg-surface">
                        Uruguay
                      </option>
                      <option value="Uzbekistan" className="text-ink bg-surface">
                        Uzbekistan
                      </option>
                      <option value="Vanuatu" className="text-ink bg-surface">
                        Vanuatu
                      </option>
                      <option value="Vatican City" className="text-ink bg-surface">
                        Vatican City
                      </option>
                      <option value="Venezuela" className="text-ink bg-surface">
                        Venezuela
                      </option>
                      <option value="Vietnam" className="text-ink bg-surface">
                        Vietnam
                      </option>
                      <option value="Wallis & Futuna" className="text-ink bg-surface">
                        Wallis &amp; Futuna
                      </option>
                      <option value="Western Sahara" className="text-ink bg-surface">
                        Western Sahara
                      </option>
                      <option value="Yemen" className="text-ink bg-surface">
                        Yemen
                      </option>
                      <option value="Zambia" className="text-ink bg-surface">
                        Zambia
                      </option>
                      <option value="Zimbabwe" className="text-ink bg-surface">
                        Zimbabwe
                      </option>
                    </select>
                  </div>
                </div>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <div>
                    <select id="ilf-volume" name="ilf-volume" aria-label="Monthly volume (optional)" className="w-full rounded-lg border border-white/25 bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/55 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20">
                      <option value className="text-ink bg-surface">
                        Monthly volume
                      </option>
                      <option value="Under 10,000 minutes" className="text-ink bg-surface">
                        Under 10,000 minutes
                      </option>
                      <option value="10,000 to 100,000" className="text-ink bg-surface">
                        10,000 to 100,000
                      </option>
                      <option value="100,000 to 1M" className="text-ink bg-surface">
                        100,000 to 1M
                      </option>
                      <option value="Over 1M" className="text-ink bg-surface">
                        Over 1M
                      </option>
                      <option value="Not sure yet" className="text-ink bg-surface">
                        Not sure yet
                      </option>
                    </select>
                  </div>
                  <div>
                    <select id="ilf-golive" name="ilf-golive" aria-label="Go-live (optional)" className="w-full rounded-lg border border-white/25 bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/55 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20">
                      <option value className="text-ink bg-surface">
                        Go-live
                      </option>
                      <option value="This month" className="text-ink bg-surface">
                        This month
                      </option>
                      <option value="1 to 3 months" className="text-ink bg-surface">
                        1 to 3 months
                      </option>
                      <option value="Later / researching" className="text-ink bg-surface">
                        Later / researching
                      </option>
                    </select>
                  </div>
                </div>
                <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
                  <label htmlFor="ilf-hp">Leave this field empty</label>
                  <input id="ilf-hp" name="company_website" type="text" tabIndex={-1} autoComplete="off" defaultValue />
                </div>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-4">
                  <button type="submit" disabled className="group inline-flex shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-[14px] font-medium text-accent shadow-md transition-all hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed" title="Verify your email first">
                    Check availability
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </button>
                  <p className="text-[12.5px] text-white/75">
                    Or{' '}
                    <a className="underline decoration-white/40 underline-offset-2 hover:decoration-white" href="/products">
                      see all products
                    </a>
                    .
                  </p>
                </div>
                <p className="text-[12px] text-white/75">We run KYC before opening routes or issuing numbers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
