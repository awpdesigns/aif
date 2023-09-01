
// Countries Data
const countries = [
    {
        "flag": "flags/af.svg",
        "name": "Afghanistan"
    },
    {
        "flag": "flags/ax.svg",
        "name": "Åland Islands"
    },
    {
        "flag": "flags/al.svg",
        "name": "Albania"
    },
    {
        "flag": "flags/dz.svg",
        "name": "Algeria"
    },
    {
        "flag": "flags/as.svg",
        "name": "American Samoa"
    },
    {
        "flag": "flags/ad.svg",
        "name": "Andorra"
    },
    {
        "flag": "flags/ao.svg",
        "name": "Angola"
    },
    {
        "flag": "flags/ai.svg",
        "name": "Anguilla"
    },
    {
        "flag": "flags/aq.svg",
        "name": "Antarctica"
    },
    {
        "flag": "flags/ag.svg",
        "name": "Antigua and Barbuda"
    },
    {
        "flag": "flags/ar.svg",
        "name": "Argentina"
    },
    {
        "flag": "flags/am.svg",
        "name": "Armenia"
    },
    {
        "flag": "flags/aw.svg",
        "name": "Aruba"
    },
    {
        "flag": "flags/au.svg",
        "name": "Australia"
    },
    {
        "flag": "flags/at.svg",
        "name": "Austria"
    },
    {
        "flag": "flags/az.svg",
        "name": "Azerbaijan"
    },
    {
        "flag": "flags/bs.svg",
        "name": "Bahamas"
    },
    {
        "flag": "flags/bh.svg",
        "name": "Bahrain"
    },
    {
        "flag": "flags/bd.svg",
        "name": "Bangladesh"
    },
    {
        "flag": "flags/bb.svg",
        "name": "Barbados"
    },
    {
        "flag": "flags/by.svg",
        "name": "Belarus"
    },
    {
        "flag": "flags/be.svg",
        "name": "Belgium"
    },
    {
        "flag": "flags/bz.svg",
        "name": "Belize"
    },
    {
        "flag": "flags/bj.svg",
        "name": "Benin"
    },
    {
        "flag": "flags/bm.svg",
        "name": "Bermuda"
    },
    {
        "flag": "flags/bt.svg",
        "name": "Bhutan"
    },
    {
        "flag": "flags/bo.svg",
        "name": "Bolivia (Plurinational State of)"
    },
    {
        "flag": "flags/bq.svg",
        "name": "Bonaire, Sint Eustatius and Saba"
    },
    {
        "flag": "flags/ba.svg",
        "name": "Bosnia and Herzegovina"
    },
    {
        "flag": "flags/bw.svg",
        "name": "Botswana"
    },
    {
        "flag": "flags/bv.svg",
        "name": "Bouvet Island"
    },
    {
        "flag": "flags/br.svg",
        "name": "Brazil"
    },
    {
        "flag": "flags/io.svg",
        "name": "British Indian Ocean Territory"
    },
    {
        "flag": "flags/um.svg",
        "name": "United States Minor Outlying Islands"
    },
    {
        "flag": "flags/vg.svg",
        "name": "Virgin Islands (British)"
    },
    {
        "flag": "flags/vi.svg",
        "name": "Virgin Islands (U.S.)"
    },
    {
        "flag": "flags/bn.svg",
        "name": "Brunei Darussalam"
    },
    {
        "flag": "flags/bg.svg",
        "name": "Bulgaria"
    },
    {
        "flag": "flags/bf.svg",
        "name": "Burkina Faso"
    },
    {
        "flag": "flags/bi.svg",
        "name": "Burundi"
    },
    {
        "flag": "flags/kh.svg",
        "name": "Cambodia"
    },
    {
        "flag": "flags/cm.svg",
        "name": "Cameroon"
    },
    {
        "flag": "flags/ca.svg",
        "name": "Canada"
    },
    {
        "flag": "flags/cv.svg",
        "name": "Cabo Verde"
    },
    {
        "flag": "flags/ky.svg",
        "name": "Cayman Islands"
    },
    {
        "flag": "flags/cf.svg",
        "name": "Central African Republic"
    },
    {
        "flag": "flags/td.svg",
        "name": "Chad"
    },
    {
        "flag": "flags/cl.svg",
        "name": "Chile"
    },
    {
        "flag": "flags/cn.svg",
        "name": "China"
    },
    {
        "flag": "flags/cx.svg",
        "name": "Christmas Island"
    },
    {
        "flag": "flags/cc.svg",
        "name": "Cocos (Keeling) Islands"
    },
    {
        "flag": "flags/co.svg",
        "name": "Colombia"
    },
    {
        "flag": "flags/km.svg",
        "name": "Comoros"
    },
    {
        "flag": "flags/cg.svg",
        "name": "Congo"
    },
    {
        "flag": "flags/cd.svg",
        "name": "Congo (Democratic Republic of the)"
    },
    {
        "flag": "flags/ck.svg",
        "name": "Cook Islands"
    },
    {
        "flag": "flags/cr.svg",
        "name": "Costa Rica"
    },
    {
        "flag": "flags/hr.svg",
        "name": "Croatia"
    },
    {
        "flag": "flags/cu.svg",
        "name": "Cuba"
    },
    {
        "flag": "flags/cw.svg",
        "name": "Curaçao"
    },
    {
        "flag": "flags/cy.svg",
        "name": "Cyprus"
    },
    {
        "flag": "flags/cz.svg",
        "name": "Czech Republic"
    },
    {
        "flag": "flags/dk.svg",
        "name": "Denmark"
    },
    {
        "flag": "flags/dj.svg",
        "name": "Djibouti"
    },
    {
        "flag": "flags/dm.svg",
        "name": "Dominica"
    },
    {
        "flag": "flags/do.svg",
        "name": "Dominican Republic"
    },
    {
        "flag": "flags/ec.svg",
        "name": "Ecuador"
    },
    {
        "flag": "flags/eg.svg",
        "name": "Egypt"
    },
    {
        "flag": "flags/sv.svg",
        "name": "El Salvador"
    },
    {
        "flag": "flags/gq.svg",
        "name": "Equatorial Guinea"
    },
    {
        "flag": "flags/er.svg",
        "name": "Eritrea"
    },
    {
        "flag": "flags/ee.svg",
        "name": "Estonia"
    },
    {
        "flag": "flags/et.svg",
        "name": "Ethiopia"
    },
    {
        "flag": "flags/fk.svg",
        "name": "Falkland Islands (Malvinas)"
    },
    {
        "flag": "flags/fo.svg",
        "name": "Faroe Islands"
    },
    {
        "flag": "flags/fj.svg",
        "name": "Fiji"
    },
    {
        "flag": "flags/fi.svg",
        "name": "Finland"
    },
    {
        "flag": "flags/fr.svg",
        "name": "France"
    },
    {
        "flag": "flags/gf.svg",
        "name": "French Guiana"
    },
    {
        "flag": "flags/pf.svg",
        "name": "French Polynesia"
    },
    {
        "flag": "flags/tf.svg",
        "name": "French Southern Territories"
    },
    {
        "flag": "flags/ga.svg",
        "name": "Gabon"
    },
    {
        "flag": "flags/gm.svg",
        "name": "Gambia"
    },
    {
        "flag": "flags/ge.svg",
        "name": "Georgia"
    },
    {
        "flag": "flags/de.svg",
        "name": "Germany"
    },
    {
        "flag": "flags/gh.svg",
        "name": "Ghana"
    },
    {
        "flag": "flags/gi.svg",
        "name": "Gibraltar"
    },
    {
        "flag": "flags/gr.svg",
        "name": "Greece"
    },
    {
        "flag": "flags/gl.svg",
        "name": "Greenland"
    },
    {
        "flag": "flags/gd.svg",
        "name": "Grenada"
    },
    {
        "flag": "flags/gp.svg",
        "name": "Guadeloupe"
    },
    {
        "flag": "flags/gu.svg",
        "name": "Guam"
    },
    {
        "flag": "flags/gt.svg",
        "name": "Guatemala"
    },
    {
        "flag": "flags/gg.svg",
        "name": "Guernsey"
    },
    {
        "flag": "flags/gn.svg",
        "name": "Guinea"
    },
    {
        "flag": "flags/gw.svg",
        "name": "Guinea-Bissau"
    },
    {
        "flag": "flags/gy.svg",
        "name": "Guyana"
    },
    {
        "flag": "flags/ht.svg",
        "name": "Haiti"
    },
    {
        "flag": "flags/hm.svg",
        "name": "Heard Island and McDonald Islands"
    },
    {
        "flag": "flags/va.svg",
        "name": "Holy See"
    },
    {
        "flag": "flags/hn.svg",
        "name": "Honduras"
    },
    {
        "flag": "flags/hk.svg",
        "name": "Hong Kong"
    },
    {
        "flag": "flags/hu.svg",
        "name": "Hungary"
    },
    {
        "flag": "flags/is.svg",
        "name": "Iceland"
    },
    {
        "flag": "flags/in.svg",
        "name": "India"
    },
    {
        "flag": "flags/id.svg",
        "name": "Indonesia"
    },
    {
        "flag": "flags/ci.svg",
        "name": "Côte d'Ivoire"
    },
    {
        "flag": "flags/ir.svg",
        "name": "Iran (Islamic Republic of)"
    },
    {
        "flag": "flags/iq.svg",
        "name": "Iraq"
    },
    {
        "flag": "flags/ie.svg",
        "name": "Ireland"
    },
    {
        "flag": "flags/im.svg",
        "name": "Isle of Man"
    },
    {
        "flag": "flags/il.svg",
        "name": "Israel"
    },
    {
        "flag": "flags/it.svg",
        "name": "Italy"
    },
    {
        "flag": "flags/jm.svg",
        "name": "Jamaica"
    },
    {
        "flag": "flags/jp.svg",
        "name": "Japan"
    },
    {
        "flag": "flags/je.svg",
        "name": "Jersey"
    },
    {
        "flag": "flags/jo.svg",
        "name": "Jordan"
    },
    {
        "flag": "flags/kz.svg",
        "name": "Kazakhstan"
    },
    {
        "flag": "flags/ke.svg",
        "name": "Kenya"
    },
    {
        "flag": "flags/ki.svg",
        "name": "Kiribati"
    },
    {
        "flag": "flags/kw.svg",
        "name": "Kuwait"
    },
    {
        "flag": "flags/kg.svg",
        "name": "Kyrgyzstan"
    },
    {
        "flag": "flags/la.svg",
        "name": "Lao People's Democratic Republic"
    },
    {
        "flag": "flags/lv.svg",
        "name": "Latvia"
    },
    {
        "flag": "flags/lb.svg",
        "name": "Lebanon"
    },
    {
        "flag": "flags/ls.svg",
        "name": "Lesotho"
    },
    {
        "flag": "flags/lr.svg",
        "name": "Liberia"
    },
    {
        "flag": "flags/ly.svg",
        "name": "Libya"
    },
    {
        "flag": "flags/li.svg",
        "name": "Liechtenstein"
    },
    {
        "flag": "flags/lt.svg",
        "name": "Lithuania"
    },
    {
        "flag": "flags/lu.svg",
        "name": "Luxembourg"
    },
    {
        "flag": "flags/mo.svg",
        "name": "Macao"
    },
    {
        "flag": "flags/mk.svg",
        "name": "Macedonia (the former Yugoslav Republic of)"
    },
    {
        "flag": "flags/mg.svg",
        "name": "Madagascar"
    },
    {
        "flag": "flags/mw.svg",
        "name": "Malawi"
    },
    {
        "flag": "flags/my.svg",
        "name": "Malaysia"
    },
    {
        "flag": "flags/mv.svg",
        "name": "Maldives"
    },
    {
        "flag": "flags/ml.svg",
        "name": "Mali"
    },
    {
        "flag": "flags/mt.svg",
        "name": "Malta"
    },
    {
        "flag": "flags/mh.svg",
        "name": "Marshall Islands"
    },
    {
        "flag": "flags/mq.svg",
        "name": "Martinique"
    },
    {
        "flag": "flags/mr.svg",
        "name": "Mauritania"
    },
    {
        "flag": "flags/mu.svg",
        "name": "Mauritius"
    },
    {
        "flag": "flags/yt.svg",
        "name": "Mayotte"
    },
    {
        "flag": "flags/mx.svg",
        "name": "Mexico"
    },
    {
        "flag": "flags/fm.svg",
        "name": "Micronesia (Federated States of)"
    },
    {
        "flag": "flags/md.svg",
        "name": "Moldova (Republic of)"
    },
    {
        "flag": "flags/mc.svg",
        "name": "Monaco"
    },
    {
        "flag": "flags/mn.svg",
        "name": "Mongolia"
    },
    {
        "flag": "flags/me.svg",
        "name": "Montenegro"
    },
    {
        "flag": "flags/ms.svg",
        "name": "Montserrat"
    },
    {
        "flag": "flags/ma.svg",
        "name": "Morocco"
    },
    {
        "flag": "flags/mz.svg",
        "name": "Mozambique"
    },
    {
        "flag": "flags/mm.svg",
        "name": "Myanmar"
    },
    {
        "flag": "flags/na.svg",
        "name": "Namibia"
    },
    {
        "flag": "flags/nr.svg",
        "name": "Nauru"
    },
    {
        "flag": "flags/np.svg",
        "name": "Nepal"
    },
    {
        "flag": "flags/nl.svg",
        "name": "Netherlands"
    },
    {
        "flag": "flags/nc.svg",
        "name": "New Caledonia"
    },
    {
        "flag": "flags/nz.svg",
        "name": "New Zealand"
    },
    {
        "flag": "flags/ni.svg",
        "name": "Nicaragua"
    },
    {
        "flag": "flags/ne.svg",
        "name": "Niger"
    },
    {
        "flag": "flags/ng.svg",
        "name": "Nigeria"
    },
    {
        "flag": "flags/nu.svg",
        "name": "Niue"
    },
    {
        "flag": "flags/nf.svg",
        "name": "Norfolk Island"
    },
    {
        "flag": "flags/kp.svg",
        "name": "Korea (Democratic People's Republic of)"
    },
    {
        "flag": "flags/mp.svg",
        "name": "Northern Mariana Islands"
    },
    {
        "flag": "flags/no.svg",
        "name": "Norway"
    },
    {
        "flag": "flags/om.svg",
        "name": "Oman"
    },
    {
        "flag": "flags/pk.svg",
        "name": "Pakistan"
    },
    {
        "flag": "flags/pw.svg",
        "name": "Palau"
    },
    {
        "flag": "flags/ps.svg",
        "name": "Palestine, State of"
    },
    {
        "flag": "flags/pa.svg",
        "name": "Panama"
    },
    {
        "flag": "flags/pg.svg",
        "name": "Papua New Guinea"
    },
    {
        "flag": "flags/py.svg",
        "name": "Paraguay"
    },
    {
        "flag": "flags/pe.svg",
        "name": "Peru"
    },
    {
        "flag": "flags/ph.svg",
        "name": "Philippines"
    },
    {
        "flag": "flags/pn.svg",
        "name": "Pitcairn"
    },
    {
        "flag": "flags/pl.svg",
        "name": "Poland"
    },
    {
        "flag": "flags/pt.svg",
        "name": "Portugal"
    },
    {
        "flag": "flags/pr.svg",
        "name": "Puerto Rico"
    },
    {
        "flag": "flags/qa.svg",
        "name": "Qatar"
    },
    {
        "flag": "flags/xk.svg",
        "name": "Republic of Kosovo"
    },
    {
        "flag": "flags/re.svg",
        "name": "Réunion"
    },
    {
        "flag": "flags/ro.svg",
        "name": "Romania"
    },
    {
        "flag": "flags/ru.svg",
        "name": "Russian Federation"
    },
    {
        "flag": "flags/rw.svg",
        "name": "Rwanda"
    },
    {
        "flag": "flags/bl.svg",
        "name": "Saint Barthélemy"
    },
    {
        "flag": "flags/sh.svg",
        "name": "Saint Helena, Ascension and Tristan da Cunha"
    },
    {
        "flag": "flags/kn.svg",
        "name": "Saint Kitts and Nevis"
    },
    {
        "flag": "flags/lc.svg",
        "name": "Saint Lucia"
    },
    {
        "flag": "flags/mf.svg",
        "name": "Saint Martin (French part)"
    },
    {
        "flag": "flags/pm.svg",
        "name": "Saint Pierre and Miquelon"
    },
    {
        "flag": "flags/vc.svg",
        "name": "Saint Vincent and the Grenadines"
    },
    {
        "flag": "flags/ws.svg",
        "name": "Samoa"
    },
    {
        "flag": "flags/sm.svg",
        "name": "San Marino"
    },
    {
        "flag": "flags/st.svg",
        "name": "Sao Tome and Principe"
    },
    {
        "flag": "flags/sa.svg",
        "name": "Saudi Arabia"
    },
    {
        "flag": "flags/sn.svg",
        "name": "Senegal"
    },
    {
        "flag": "flags/rs.svg",
        "name": "Serbia"
    },
    {
        "flag": "flags/sc.svg",
        "name": "Seychelles"
    },
    {
        "flag": "flags/sl.svg",
        "name": "Sierra Leone"
    },
    {
        "flag": "flags/sg.svg",
        "name": "Singapore"
    },
    {
        "flag": "flags/sx.svg",
        "name": "Sint Maarten (Dutch part)"
    },
    {
        "flag": "flags/sk.svg",
        "name": "Slovakia"
    },
    {
        "flag": "flags/si.svg",
        "name": "Slovenia"
    },
    {
        "flag": "flags/sb.svg",
        "name": "Solomon Islands"
    },
    {
        "flag": "flags/so.svg",
        "name": "Somalia"
    },
    {
        "flag": "flags/za.svg",
        "name": "South Africa"
    },
    {
        "flag": "flags/gs.svg",
        "name": "South Georgia and the South Sandwich Islands"
    },
    {
        "flag": "flags/kr.svg",
        "name": "Korea (Republic of)"
    },
    {
        "flag": "flags/ss.svg",
        "name": "South Sudan"
    },
    {
        "flag": "flags/es.svg",
        "name": "Spain"
    },
    {
        "flag": "flags/lk.svg",
        "name": "Sri Lanka"
    },
    {
        "flag": "flags/sd.svg",
        "name": "Sudan"
    },
    {
        "flag": "flags/sr.svg",
        "name": "Suriname"
    },
    {
        "flag": "flags/sj.svg",
        "name": "Svalbard and Jan Mayen"
    },
    {
        "flag": "flags/sz.svg",
        "name": "Swaziland"
    },
    {
        "flag": "flags/se.svg",
        "name": "Sweden"
    },
    {
        "flag": "flags/ch.svg",
        "name": "Switzerland"
    },
    {
        "flag": "flags/sy.svg",
        "name": "Syrian Arab Republic"
    },
    {
        "flag": "flags/tw.svg",
        "name": "Taiwan"
    },
    {
        "flag": "flags/tj.svg",
        "name": "Tajikistan"
    },
    {
        "flag": "flags/tz.svg",
        "name": "Tanzania, United Republic of"
    },
    {
        "flag": "flags/th.svg",
        "name": "Thailand"
    },
    {
        "flag": "flags/tl.svg",
        "name": "Timor-Leste"
    },
    {
        "flag": "flags/tg.svg",
        "name": "Togo"
    },
    {
        "flag": "flags/tk.svg",
        "name": "Tokelau"
    },
    {
        "flag": "flags/to.svg",
        "name": "Tonga"
    },
    {
        "flag": "flags/tt.svg",
        "name": "Trinidad and Tobago"
    },
    {
        "flag": "flags/tn.svg",
        "name": "Tunisia"
    },
    {
        "flag": "flags/tr.svg",
        "name": "Turkey"
    },
    {
        "flag": "flags/tm.svg",
        "name": "Turkmenistan"
    },
    {
        "flag": "flags/tc.svg",
        "name": "Turks and Caicos Islands"
    },
    {
        "flag": "flags/tv.svg",
        "name": "Tuvalu"
    },
    {
        "flag": "flags/ug.svg",
        "name": "Uganda"
    },
    {
        "flag": "flags/ua.svg",
        "name": "Ukraine"
    },
    {
        "flag": "flags/ae.svg",
        "name": "United Arab Emirates"
    },
    {
        "flag": "flags/gb.svg",
        "name": "United Kingdom of Great Britain and Northern Ireland"
    },
    {
        "flag": "flags/us.svg",
        "name": "United States of America"
    },
    {
        "flag": "flags/uy.svg",
        "name": "Uruguay"
    },
    {
        "flag": "flags/uz.svg",
        "name": "Uzbekistan"
    },
    {
        "flag": "flags/vu.svg",
        "name": "Vanuatu"
    },
    {
        "flag": "flags/ve.svg",
        "name": "Venezuela (Bolivarian Republic of)"
    },
    {
        "flag": "flags/vn.svg",
        "name": "Vietnam"
    },
    {
        "flag": "flags/wf.svg",
        "name": "Wallis and Futuna"
    },
    {
        "flag": "flags/eh.svg",
        "name": "Western Sahara"
    },
    {
        "flag": "flags/ye.svg",
        "name": "Yemen"
    },
    {
        "flag": "flags/zm.svg",
        "name": "Zambia"
    },
    {
        "flag": "flags/zw.svg",
        "name": "Zimbabwe"
    }
];
const aseanCountries = [
    {
        "flag": "flags/id.svg",
        "name": "Indonesia"
    },
    {
        "flag": "flags/my.svg",
        "name": "Malaysia"
    },
    {
        "flag": "flags/ph.svg",
        "name": "Philippines"
    },
    {
        "flag": "flags/sg.svg",
        "name": "Singapore"
    },
    {
        "flag": "flags/th.svg",
        "name": "Thailand"
    },
    {
        "flag": "flags/vn.svg",
        "name": "Vietnam"
    },
    {
        "flag": "flags/bn.svg",
        "name": "Brunei Darussalam"
    },
    {
        "flag": "flags/kh.svg",
        "name": "Cambodia"
    },
    {
        "flag": "flags/la.svg",
        "name": "Lao People's Democratic Republic"
    },
    {
        "flag": "flags/mm.svg",
        "name": "Myanmar"
    },
    {
        "flag": "flags/tl.svg",
        "name": "Timor-Leste"
    },
];
// Games
let correct;
let amtCorrect = 0;
let seconds = 15;
let amtIncorrect = 0;
function main() {
    let options = [];
    const maxOptions = 4;

    while (options.length < maxOptions) {
        let country = getRandomCountry();
        if (options.indexOf(country) === -1) {
        options.push(country);
        }
    }
    correct = options[Math.round(Math.random() * (options.length - 1))];
    for (let i = 0; i < options.length; i++) {
        get(`option${i + 1}label`).innerHTML = options[i].name;
        get(`option${i + 1}input`).value = options[i].name;
        get(`option${i + 1}input`).checked = false;
    }

    get("game-flag").src = correct.flag;
}
function getRandomCountry() {
return aseanCountries[Math.round(Math.random() * (aseanCountries.length - 1))];
}
function get(id) {
    return document.getElementById(id);
}
function check() {
    let input;
    try {
        input = document.querySelector('input[name = "option"]:checked').value;
    } catch {
        return;
    }
    if (input === correct.name) {
        amtCorrect++;
        get("game-score").innerHTML = amtCorrect;
    } else {
        amtIncorrect++;
    }
    main();
}
function finish() {
    clearInterval(checkInterval);
    get("game-alert").style.display = "flex";
    get("game-alertscore").innerHTML = amtCorrect;
    let percentage = Math.round((amtCorrect / (amtCorrect + amtIncorrect)) * 100);
    if (isNaN(percentage)) percentage = 0;
    get("game-alertaccuracy").innerHTML = `${percentage}%`;
    // If accuracy is 100%, show a special message
    if (percentage === 100) {
        get("alert-respons").innerHTML = "<div class='theicon'>😎</div><strong class='d-block'>Perfect!</strong> <span style='font-size:2rem;'>You're a true ASEAN citizen!</span>";
    } else if (percentage >= 50) {
        get("alert-respons").innerHTML = "<div class='theicon'>😄</div><strong class='d-block'>Great!</strong> <span style='font-size:2rem;'>You're good at this!</span>";
    } else if (percentage >= 25) {
        get("alert-respons").innerHTML = "<div class='theicon'>😐</div><strong class='d-block'>Not bad!</strong> <span style='font-size:2rem;'>You can do better!</span>";
    } else {
        get("alert-respons").innerHTML = "<div class='theicon'>😕</div><strong class='d-block'>Not good!</strong> <span style='font-size:2rem;'>You need to learn more!</span>";
    }
}
function timer() {
    setTimeout(finish, seconds * 1000);
    get("game-time").innerHTML = seconds;
    let countdown = setInterval(function () {
        seconds--;
        get("game-time").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
        if (seconds === 5) get("game-time").style.color = "#ff0000";
    }, 1000);
}
function start() {
    get("game-card").style.display = "block";
    get("game-ready").style.display = "none";
    get("game-score").innerHTML = amtCorrect;
    timer();
    checkInterval = setInterval(check, 50);
    main();
}
function reset() {
    amtCorrect = 0;
    amtIncorrect = 0;
    seconds = 15;
    get("game-alert").style.display = "none";
    get("game-card").style.display = "block";
    get("game-score").innerHTML = amtCorrect;
    get("game-time").style.color = "var(--secondary)";
    timer();
    checkInterval = setInterval(check, 50);
    main();
}

let checkInterval = setInterval(check, 50);
main();
// timer();