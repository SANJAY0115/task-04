var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
request.onload=function()
{
    var data = request.response
    var result= JSON.parse(data)

//Que1: display all country flags
for(var obj of result)
{
    console.log(obj.flags.png);
}
//Que2: print all countries  names,region,subregion,population.
for(var obj of result)
{
    console.log(obj.name.common+","+obj.region+","+obj.subregion+","+obj.population);
}
}

//output :

// que2.js:12 https://flagcdn.com/w320/aw.png
// que2.js:12 https://flagcdn.com/w320/ar.png
// que2.js:12 https://flagcdn.com/w320/se.png
// que2.js:12 https://flagcdn.com/w320/mv.png
// que2.js:12 https://flagcdn.com/w320/mx.png
// que2.js:12 https://flagcdn.com/w320/nz.png
// que2.js:12 https://flagcdn.com/w320/ec.png
// que2.js:12 https://flagcdn.com/w320/wf.png
// que2.js:12 https://flagcdn.com/w320/ax.png
// que2.js:12 https://flagcdn.com/w320/me.png
// que2.js:12 https://flagcdn.com/w320/pk.png
// que2.js:12 https://flagcdn.com/w320/pn.png
// que2.js:12 https://flagcdn.com/w320/zm.png
// que2.js:12 https://flagcdn.com/w320/sc.png
// que2.js:12 https://flagcdn.com/w320/my.png
// que2.js:12 https://flagcdn.com/w320/no.png
// que2.js:12 https://flagcdn.com/w320/uz.png
// que2.js:12 https://flagcdn.com/w320/vu.png
// que2.js:12 https://flagcdn.com/w320/tf.png
// que2.js:12 https://flagcdn.com/w320/cx.png
// que2.js:12 https://flagcdn.com/w320/sg.png
// que2.js:12 https://flagcdn.com/w320/sr.png
// que2.js:12 https://flagcdn.com/w320/eh.png
// que2.js:12 https://flagcdn.com/w320/mf.png
// que2.js:12 https://flagcdn.com/w320/cr.png
// que2.js:12 https://flagcdn.com/w320/hm.png
// que2.js:12 https://flagcdn.com/w320/ie.png
// que2.js:12 https://flagcdn.com/w320/aq.png
// que2.js:12 https://flagcdn.com/w320/au.png
// que2.js:12 https://flagcdn.com/w320/ly.png
// que2.js:12 https://flagcdn.com/w320/qa.png
// que2.js:12 https://flagcdn.com/w320/gl.png
// que2.js:12 https://flagcdn.com/w320/mu.png
// que2.js:12 https://flagcdn.com/w320/kz.png
// que2.js:12 https://flagcdn.com/w320/io.png
// que2.js:12 https://flagcdn.com/w320/al.png
// que2.js:12 https://flagcdn.com/w320/bh.png
// que2.js:12 https://flagcdn.com/w320/pg.png
// que2.js:12 https://flagcdn.com/w320/bi.png
// que2.js:12 https://flagcdn.com/w320/in.png
// que2.js:12 https://flagcdn.com/w320/uy.png
// que2.js:12 https://flagcdn.com/w320/lc.png
// que2.js:12 https://flagcdn.com/w320/bb.png
// que2.js:12 https://flagcdn.com/w320/nc.png
// que2.js:12 https://flagcdn.com/w320/lv.png
// que2.js:12 https://flagcdn.com/w320/ee.png
// que2.js:12 https://flagcdn.com/w320/nu.png
// que2.js:12 https://flagcdn.com/w320/bl.png
// que2.js:12 https://flagcdn.com/w320/pr.png
// que2.js:12 https://flagcdn.com/w320/gd.png
// que2.js:12 https://flagcdn.com/w320/mo.png
// que2.js:12 https://flagcdn.com/w320/cy.png
// que2.js:12 https://flagcdn.com/w320/im.png
// que2.js:12 https://flagcdn.com/w320/gr.png
// que2.js:12 https://flagcdn.com/w320/sy.png
// que2.js:12 https://flagcdn.com/w320/lt.png
// que2.js:12 https://flagcdn.com/w320/cw.png
// que2.js:12 https://flagcdn.com/w320/dm.png
// que2.js:12 https://flagcdn.com/w320/ne.png
// que2.js:12 https://flagcdn.com/w320/kg.png
// que2.js:12 https://flagcdn.com/w320/tt.png
// que2.js:12 https://flagcdn.com/w320/tg.png
// que2.js:12 https://flagcdn.com/w320/ps.png
// que2.js:12 https://flagcdn.com/w320/mg.png
// que2.js:12 https://flagcdn.com/w320/hr.png
// que2.js:12 https://flagcdn.com/w320/fo.png
// que2.js:12 https://flagcdn.com/w320/ht.png
// que2.js:12 https://flagcdn.com/w320/ms.png
// que2.js:12 https://flagcdn.com/w320/ck.png
// que2.js:12 https://flagcdn.com/w320/tl.png
// que2.js:12 https://flagcdn.com/w320/mq.png
// que2.js:12 https://flagcdn.com/w320/cu.png
// que2.js:12 https://flagcdn.com/w320/tw.png
// que2.js:12 https://flagcdn.com/w320/sz.png
// que2.js:12 https://flagcdn.com/w320/ua.png
// que2.js:12 https://flagcdn.com/w320/bm.png
// que2.js:12 https://flagcdn.com/w320/kr.png
// que2.js:12 https://flagcdn.com/w320/pe.png
// que2.js:12 https://flagcdn.com/w320/iq.png
// que2.js:12 https://flagcdn.com/w320/md.png
// que2.js:12 https://flagcdn.com/w320/sm.png
// que2.js:12 https://flagcdn.com/w320/ve.png
// que2.js:12 https://flagcdn.com/w320/gy.png
// que2.js:12 https://flagcdn.com/w320/ky.png
// que2.js:12 https://flagcdn.com/w320/kh.png
// que2.js:12 https://flagcdn.com/w320/cc.png
// que2.js:12 https://flagcdn.com/w320/mt.png
// que2.js:12 https://flagcdn.com/w320/lk.png
// que2.js:12 https://flagcdn.com/w320/il.png
// que2.js:12 https://flagcdn.com/w320/sd.png
// que2.js:12 https://flagcdn.com/w320/vi.png
// que2.js:12 https://flagcdn.com/w320/er.png
// que2.js:12 https://flagcdn.com/w320/ml.png
// que2.js:12 https://flagcdn.com/w320/so.png
// que2.js:12 https://flagcdn.com/w320/nf.png
// que2.js:12 https://flagcdn.com/w320/km.png
// que2.js:12 https://flagcdn.com/w320/ni.png
// que2.js:12 https://flagcdn.com/w320/ru.png
// que2.js:12 https://flagcdn.com/w320/ug.png
// que2.js:12 https://flagcdn.com/w320/nr.png
// que2.js:12 https://flagcdn.com/w320/ch.png
// que2.js:12 https://flagcdn.com/w320/pt.png
// que2.js:12 https://flagcdn.com/w320/tj.png
// que2.js:12 https://flagcdn.com/w320/ss.png
// que2.js:12 https://flagcdn.com/w320/bv.png
// que2.js:12 https://flagcdn.com/w320/fm.png
// que2.js:12 https://flagcdn.com/w320/as.png
// que2.js:12 https://flagcdn.com/w320/cz.png
// que2.js:12 https://flagcdn.com/w320/bw.png
// que2.js:12 https://flagcdn.com/w320/tn.png
// que2.js:12 https://flagcdn.com/w320/ai.png
// que2.js:12 https://flagcdn.com/w320/gw.png
// que2.js:12 https://flagcdn.com/w320/sk.png
// que2.js:12 https://flagcdn.com/w320/mh.png
// que2.js:12 https://flagcdn.com/w320/dz.png
// que2.js:12 https://flagcdn.com/w320/jm.png
// que2.js:12 https://flagcdn.com/w320/mz.png
// que2.js:12 https://flagcdn.com/w320/es.png
// que2.js:12 https://flagcdn.com/w320/hn.png
// que2.js:12 https://flagcdn.com/w320/nl.png
// que2.js:12 https://flagcdn.com/w320/za.png
// que2.js:12 https://flagcdn.com/w320/az.png
// que2.js:12 https://flagcdn.com/w320/mk.png
// que2.js:12 https://flagcdn.com/w320/gm.png
// que2.js:12 https://flagcdn.com/w320/lr.png
// que2.js:12 https://flagcdn.com/w320/lu.png
// que2.js:12 https://flagcdn.com/w320/cv.png
// que2.js:12 https://flagcdn.com/w320/bs.png
// que2.js:12 https://flagcdn.com/w320/ge.png
// que2.js:12 https://flagcdn.com/w320/ki.png
// que2.js:12 https://flagcdn.com/w320/tz.png
// que2.js:12 https://flagcdn.com/w320/cn.png
// que2.js:12 https://flagcdn.com/w320/gt.png
// que2.js:12 https://flagcdn.com/w320/st.png
// que2.js:12 https://flagcdn.com/w320/de.png
// que2.js:12 https://flagcdn.com/w320/sl.png
// que2.js:12 https://flagcdn.com/w320/td.png
// que2.js:12 https://flagcdn.com/w320/gb.png
// que2.js:12 https://flagcdn.com/w320/si.png
// que2.js:12 https://flagcdn.com/w320/th.png
// que2.js:12 https://flagcdn.com/w320/id.png
// que2.js:12 https://flagcdn.com/w320/mp.png
// que2.js:12 https://flagcdn.com/w320/gu.png
// que2.js:12 https://flagcdn.com/w320/fi.png
// que2.js:12 https://flagcdn.com/w320/yt.png
// que2.js:12 https://flagcdn.com/w320/gi.png
// que2.js:12 https://flagcdn.com/w320/tm.png
// que2.js:12 https://flagcdn.com/w320/xk.png
// que2.js:12 https://flagcdn.com/w320/ci.png
// que2.js:12 https://flagcdn.com/w320/ma.png
// que2.js:12 https://flagcdn.com/w320/do.png
// que2.js:12 https://flagcdn.com/w320/gh.png
// que2.js:12 https://flagcdn.com/w320/va.png
// que2.js:12 https://flagcdn.com/w320/je.png
// que2.js:12 https://flagcdn.com/w320/tr.png
// que2.js:12 https://flagcdn.com/w320/tv.png
// que2.js:12 https://flagcdn.com/w320/ir.png
// que2.js:12 https://flagcdn.com/w320/eg.png
// que2.js:12 https://flagcdn.com/w320/dk.png
// que2.js:12 https://flagcdn.com/w320/ke.png
// que2.js:12 https://flagcdn.com/w320/bg.png
// que2.js:12 https://flagcdn.com/w320/zw.png
// que2.js:12 https://flagcdn.com/w320/ao.png
// que2.js:12 https://flagcdn.com/w320/ng.png
// que2.js:12 https://flagcdn.com/w320/pl.png
// que2.js:12 https://flagcdn.com/w320/sn.png
// que2.js:12 https://flagcdn.com/w320/sh.png
// que2.js:12 https://flagcdn.com/w320/lb.png
// que2.js:12 https://flagcdn.com/w320/ws.png
// que2.js:12 https://flagcdn.com/w320/ph.png
// que2.js:12 https://flagcdn.com/w320/gg.png
// que2.js:12 https://flagcdn.com/w320/sv.png
// que2.js:12 https://flagcdn.com/w320/kw.png
// que2.js:12 https://flagcdn.com/w320/to.png
// que2.js:12 https://flagcdn.com/w320/om.png
// que2.js:12 https://flagcdn.com/w320/kn.png
// que2.js:12 https://flagcdn.com/w320/cf.png
// que2.js:12 https://flagcdn.com/w320/rs.png
// que2.js:12 https://flagcdn.com/w320/am.png
// que2.js:12 https://flagcdn.com/w320/bd.png
// que2.js:12 https://flagcdn.com/w320/la.png
// que2.js:12 https://flagcdn.com/w320/cl.png
// que2.js:12 https://flagcdn.com/w320/pf.png
// que2.js:12 https://flagcdn.com/w320/pa.png
// que2.js:12 https://flagcdn.com/w320/us.png
// que2.js:12 https://flagcdn.com/w320/np.png
// que2.js:12 https://flagcdn.com/w320/mm.png
// que2.js:12 https://flagcdn.com/w320/fk.png
// que2.js:12 https://flagcdn.com/w320/hu.png
// que2.js:12 https://flagcdn.com/w320/pw.png
// que2.js:12 https://flagcdn.com/w320/gq.png
// que2.js:12 https://flagcdn.com/w320/gn.png
// que2.js:12 https://flagcdn.com/w320/ae.png
// que2.js:12 https://flagcdn.com/w320/tc.png
// que2.js:12 https://flagcdn.com/w320/vg.png
// que2.js:12 https://flagcdn.com/w320/li.png
// que2.js:12 https://flagcdn.com/w320/ba.png
// que2.js:12 https://flagcdn.com/w320/mw.png
// que2.js:12 https://flagcdn.com/w320/bt.png
// que2.js:12 https://flagcdn.com/w320/cm.png
// que2.js:12 https://flagcdn.com/w320/ad.png
// que2.js:12 https://flagcdn.com/w320/gp.png
// que2.js:12 https://flagcdn.com/w320/cg.png
// que2.js:12 https://flagcdn.com/w320/re.png
// que2.js:12 https://flagcdn.com/w320/bf.png
// que2.js:12 https://flagcdn.com/w320/jo.png
// que2.js:12 https://flagcdn.com/w320/cd.png
// que2.js:12 https://flagcdn.com/w320/tk.png
// que2.js:12 https://flagcdn.com/w320/vn.png
// que2.js:12 https://flagcdn.com/w320/sx.png
// que2.js:12 https://flagcdn.com/w320/be.png
// que2.js:12 https://flagcdn.com/w320/um.png
// que2.js:12 https://flagcdn.com/w320/br.png
// que2.js:12 https://flagcdn.com/w320/bz.png
// que2.js:12 https://flagcdn.com/w320/ag.png
// que2.js:12 https://flagcdn.com/w320/py.png
// que2.js:12 https://flagcdn.com/w320/bj.png
// que2.js:12 https://flagcdn.com/w320/bn.png
// que2.js:12 https://flagcdn.com/w320/bo.png
// que2.js:12 https://flagcdn.com/w320/dj.png
// que2.js:12 https://flagcdn.com/w320/gf.png
// que2.js:12 https://flagcdn.com/w320/ca.png
// que2.js:12 https://flagcdn.com/w320/pm.png
// que2.js:12 https://flagcdn.com/w320/jp.png
// que2.js:12 https://flagcdn.com/w320/rw.png
// que2.js:12 https://flagcdn.com/w320/vc.png
// que2.js:12 https://flagcdn.com/w320/is.png
// que2.js:12 https://flagcdn.com/w320/by.png
// que2.js:12 https://flagcdn.com/w320/hk.png
// que2.js:12 https://flagcdn.com/w320/ls.png
// que2.js:12 https://flagcdn.com/w320/fj.png
// que2.js:12 https://flagcdn.com/w320/at.png
// que2.js:12 https://flagcdn.com/w320/co.png
// que2.js:12 https://flagcdn.com/w320/ga.png
// que2.js:12 https://flagcdn.com/w320/sa.png
// que2.js:12 https://flagcdn.com/w320/gs.png
// que2.js:12 https://flagcdn.com/w320/et.png
// que2.js:12 https://flagcdn.com/w320/bq.png
// que2.js:12 https://flagcdn.com/w320/mc.png
// que2.js:12 https://flagcdn.com/w320/kp.png
// que2.js:12 https://flagcdn.com/w320/it.png
// que2.js:12 https://flagcdn.com/w320/na.png
// que2.js:12 https://flagcdn.com/w320/mn.png
// que2.js:12 https://flagcdn.com/w320/sb.png
// que2.js:12 https://flagcdn.com/w320/ye.png
// que2.js:12 https://flagcdn.com/w320/ro.png
// que2.js:12 https://flagcdn.com/w320/sj.png
// que2.js:12 https://flagcdn.com/w320/fr.png
// que2.js:17 Mauritania,Africa,Western Africa,4649660
// que2.js:17 Aruba,Americas,Caribbean,106766
// que2.js:17 Argentina,Americas,South America,45376763
// que2.js:17 Sweden,Europe,Northern Europe,10353442
// que2.js:17 Maldives,Asia,Southern Asia,540542
// que2.js:17 Mexico,Americas,North America,128932753
// que2.js:17 New Zealand,Oceania,Australia and New Zealand,5084300
// que2.js:17 Ecuador,Americas,South America,17643060
// que2.js:17 Wallis and Futuna,Oceania,Polynesia,11750
// que2.js:17 Åland Islands,Europe,Northern Europe,29458
// que2.js:17 Montenegro,Europe,Southeast Europe,621718
// que2.js:17 Pakistan,Asia,Southern Asia,220892331
// que2.js:17 Pitcairn Islands,Oceania,Polynesia,56
// que2.js:17 Zambia,Africa,Eastern Africa,18383956
// que2.js:17 Seychelles,Africa,Eastern Africa,98462
// que2.js:17 Malaysia,Asia,South-Eastern Asia,32365998
// que2.js:17 Norway,Europe,Northern Europe,5379475
// que2.js:17 Uzbekistan,Asia,Central Asia,34232050
// que2.js:17 Vanuatu,Oceania,Melanesia,307150
// que2.js:17 French Southern and Antarctic Lands,Antarctic,undefined,400
// que2.js:17 Christmas Island,Oceania,Australia and New Zealand,2072
// que2.js:17 Singapore,Asia,South-Eastern Asia,5685807
// que2.js:17 Suriname,Americas,South America,586634
// que2.js:17 Western Sahara,Africa,Northern Africa,510713
// que2.js:17 Saint Martin,Americas,Caribbean,38659
// que2.js:17 Costa Rica,Americas,Central America,5094114
// que2.js:17 Heard Island and McDonald Islands,Antarctic,undefined,0
// que2.js:17 Ireland,Europe,Northern Europe,4994724
// que2.js:17 Antarctica,Antarctic,undefined,1000
// que2.js:17 Australia,Oceania,Australia and New Zealand,25687041
// que2.js:17 Libya,Africa,Northern Africa,6871287
// que2.js:17 Qatar,Asia,Western Asia,2881060
// que2.js:17 Greenland,Americas,North America,56367
// que2.js:17 Mauritius,Africa,Eastern Africa,1265740
// que2.js:17 Kazakhstan,Asia,Central Asia,18754440
// que2.js:17 British Indian Ocean Territory,Africa,Eastern Africa,3000
// que2.js:17 Albania,Europe,Southeast Europe,2837743
// que2.js:17 Bahrain,Asia,Western Asia,1701583
// que2.js:17 Papua New Guinea,Oceania,Melanesia,8947027
// que2.js:17 Burundi,Africa,Eastern Africa,11890781
// que2.js:17 India,Asia,Southern Asia,1380004385
// que2.js:17 Uruguay,Americas,South America,3473727
// que2.js:17 Saint Lucia,Americas,Caribbean,183629
// que2.js:17 Barbados,Americas,Caribbean,287371
// que2.js:17 New Caledonia,Oceania,Melanesia,271960
// que2.js:17 Latvia,Europe,Northern Europe,1901548
// que2.js:17 Estonia,Europe,Northern Europe,1331057
// que2.js:17 Niue,Oceania,Polynesia,1470
// que2.js:17 Saint Barthélemy,Americas,Caribbean,4255
// que2.js:17 Puerto Rico,Americas,Caribbean,3194034
// que2.js:17 Grenada,Americas,Caribbean,112519
// que2.js:17 Macau,Asia,Eastern Asia,649342
// que2.js:17 Cyprus,Europe,Southern Europe,1207361
// que2.js:17 Isle of Man,Europe,Northern Europe,85032
// que2.js:17 Greece,Europe,Southern Europe,10715549
// que2.js:17 Syria,Asia,Western Asia,17500657
// que2.js:17 Lithuania,Europe,Northern Europe,2794700
// que2.js:17 Curaçao,Americas,Caribbean,155014
// que2.js:17 Dominica,Americas,Caribbean,71991
// que2.js:17 Niger,Africa,Western Africa,24206636
// que2.js:17 Kyrgyzstan,Asia,Central Asia,6591600
// que2.js:17 Trinidad and Tobago,Americas,Caribbean,1399491
// que2.js:17 Togo,Africa,Western Africa,8278737
// que2.js:17 Palestine,Asia,Western Asia,4803269
// que2.js:17 Madagascar,Africa,Eastern Africa,27691019
// que2.js:17 Croatia,Europe,Southeast Europe,4047200
// que2.js:17 Faroe Islands,Europe,Northern Europe,48865
// que2.js:17 Haiti,Americas,Caribbean,11402533
// que2.js:17 Montserrat,Americas,Caribbean,4922
// que2.js:17 Cook Islands,Oceania,Polynesia,18100
// que2.js:17 Timor-Leste,Asia,South-Eastern Asia,1318442
// que2.js:17 Martinique,Americas,Caribbean,378243
// que2.js:17 Cuba,Americas,Caribbean,11326616
// que2.js:17 Taiwan,Asia,Eastern Asia,23503349
// que2.js:17 Eswatini,Africa,Southern Africa,1160164
// que2.js:17 Ukraine,Europe,Eastern Europe,44134693
// que2.js:17 Bermuda,Americas,North America,63903
// que2.js:17 South Korea,Asia,Eastern Asia,51780579
// que2.js:17 Peru,Americas,South America,32971846
// que2.js:17 Iraq,Asia,Western Asia,40222503
// que2.js:17 Moldova,Europe,Eastern Europe,2617820
// que2.js:17 San Marino,Europe,Southern Europe,33938
// que2.js:17 Venezuela,Americas,South America,28435943
// que2.js:17 Guyana,Americas,South America,786559
// que2.js:17 Cayman Islands,Americas,Caribbean,65720
// que2.js:17 Cambodia,Asia,South-Eastern Asia,16718971
// que2.js:17 Cocos (Keeling) Islands,Oceania,Australia and New Zealand,544
// que2.js:17 Malta,Europe,Southern Europe,525285
// que2.js:17 Sri Lanka,Asia,Southern Asia,21919000
// que2.js:17 Israel,Asia,Western Asia,9216900
// que2.js:17 Sudan,Africa,Northern Africa,43849269
// que2.js:17 United States Virgin Islands,Americas,Caribbean,106290
// que2.js:17 Eritrea,Africa,Eastern Africa,5352000
// que2.js:17 Mali,Africa,Western Africa,20250834
// que2.js:17 Somalia,Africa,Eastern Africa,15893219
// que2.js:17 Norfolk Island,Oceania,Australia and New Zealand,2302
// que2.js:17 Comoros,Africa,Eastern Africa,869595
// que2.js:17 Nicaragua,Americas,Central America,6624554
// que2.js:17 Russia,Europe,Eastern Europe,144104080
// que2.js:17 Uganda,Africa,Eastern Africa,45741000
// que2.js:17 Nauru,Oceania,Micronesia,10834
// que2.js:17 Switzerland,Europe,Western Europe,8654622
// que2.js:17 Portugal,Europe,Southern Europe,10305564
// que2.js:17 Tajikistan,Asia,Central Asia,9537642
// que2.js:17 South Sudan,Africa,Middle Africa,11193729
// que2.js:17 Bouvet Island,Antarctic,undefined,0
// que2.js:17 Micronesia,Oceania,Micronesia,115021
// que2.js:17 American Samoa,Oceania,Polynesia,55197
// que2.js:17 Czechia,Europe,Central Europe,10698896
// que2.js:17 Botswana,Africa,Southern Africa,2351625
// que2.js:17 Tunisia,Africa,Northern Africa,11818618
// que2.js:17 Anguilla,Americas,Caribbean,13452
// que2.js:17 Guinea-Bissau,Africa,Western Africa,1967998
// que2.js:17 Slovakia,Europe,Central Europe,5458827
// que2.js:17 Marshall Islands,Oceania,Micronesia,59194
// que2.js:17 Algeria,Africa,Northern Africa,44700000
// que2.js:17 Jamaica,Americas,Caribbean,2961161
// que2.js:17 Mozambique,Africa,Eastern Africa,31255435
// que2.js:17 Spain,Europe,Southern Europe,47351567
// que2.js:17 Honduras,Americas,Central America,9904608
// que2.js:17 Netherlands,Europe,Western Europe,16655799
// que2.js:17 South Africa,Africa,Southern Africa,59308690
// que2.js:17 Azerbaijan,Asia,Western Asia,10110116
// que2.js:17 North Macedonia,Europe,Southeast Europe,2077132
// que2.js:17 Gambia,Africa,Western Africa,2416664
// que2.js:17 Liberia,Africa,Western Africa,5057677
// que2.js:17 Luxembourg,Europe,Western Europe,632275
// que2.js:17 Cape Verde,Africa,Western Africa,555988
// que2.js:17 Bahamas,Americas,Caribbean,393248
// que2.js:17 Georgia,Asia,Western Asia,3714000
// que2.js:17 Kiribati,Oceania,Micronesia,119446
// que2.js:17 Tanzania,Africa,Eastern Africa,59734213
// que2.js:17 China,Asia,Eastern Asia,1402112000
// que2.js:17 Guatemala,Americas,Central America,16858333
// que2.js:17 São Tomé and Príncipe,Africa,Middle Africa,219161
// que2.js:17 Germany,Europe,Western Europe,83240525
// que2.js:17 Sierra Leone,Africa,Western Africa,7976985
// que2.js:17 Chad,Africa,Middle Africa,16425859
// que2.js:17 United Kingdom,Europe,Northern Europe,67215293
// que2.js:17 Slovenia,Europe,Central Europe,2100126
// que2.js:17 Thailand,Asia,South-Eastern Asia,69799978
// que2.js:17 Indonesia,Asia,South-Eastern Asia,273523621
// que2.js:17 Northern Mariana Islands,Oceania,Micronesia,57557
// que2.js:17 Guam,Oceania,Micronesia,168783
// que2.js:17 Finland,Europe,Northern Europe,5530719
// que2.js:17 Mayotte,Africa,Eastern Africa,226915
// que2.js:17 Gibraltar,Europe,Southern Europe,33691
// que2.js:17 Turkmenistan,Asia,Central Asia,6031187
// que2.js:17 Kosovo,Europe,Southeast Europe,1775378
// que2.js:17 Ivory Coast,Africa,Western Africa,26378275
// que2.js:17 Morocco,Africa,Northern Africa,36910558
// que2.js:17 Dominican Republic,Americas,Caribbean,10847904
// que2.js:17 Ghana,Africa,Western Africa,31072945
// que2.js:17 Vatican City,Europe,Southern Europe,451
// que2.js:17 Jersey,Europe,Northern Europe,100800
// que2.js:17 Turkey,Asia,Western Asia,84339067
// que2.js:17 Tuvalu,Oceania,Polynesia,11792
// que2.js:17 Iran,Asia,Southern Asia,83992953
// que2.js:17 Egypt,Africa,Northern Africa,102334403
// que2.js:17 Denmark,Europe,Northern Europe,5831404
// que2.js:17 Kenya,Africa,Eastern Africa,53771300
// que2.js:17 Bulgaria,Europe,Southeast Europe,6927288
// que2.js:17 Zimbabwe,Africa,Southern Africa,14862927
// que2.js:17 Angola,Africa,Middle Africa,32866268
// que2.js:17 Nigeria,Africa,Western Africa,206139587
// que2.js:17 Poland,Europe,Central Europe,37950802
// que2.js:17 Senegal,Africa,Western Africa,16743930
// que2.js:17 Saint Helena, Ascension and Tristan da Cunha,Africa,Western Africa,53192
// que2.js:17 Lebanon,Asia,Western Asia,6825442
// que2.js:17 Samoa,Oceania,Polynesia,198410
// que2.js:17 Philippines,Asia,South-Eastern Asia,109581085
// que2.js:17 Guernsey,Europe,Northern Europe,62999
// que2.js:17 El Salvador,Americas,Central America,6486201
// que2.js:17 Kuwait,Asia,Western Asia,4270563
// que2.js:17 Tonga,Oceania,Polynesia,105697
// que2.js:17 Oman,Asia,Western Asia,5106622
// que2.js:17 Afghanistan,Asia,Southern Asia,40218234
// que2.js:17 Saint Kitts and Nevis,Americas,Caribbean,53192
// que2.js:17 Central African Republic,Africa,Middle Africa,4829764
// que2.js:17 Serbia,Europe,Southeast Europe,6908224
// que2.js:17 Armenia,Asia,Western Asia,2963234
// que2.js:17 Bangladesh,Asia,Southern Asia,164689383
// que2.js:17 Laos,Asia,South-Eastern Asia,7275556
// que2.js:17 Chile,Americas,South America,19116209
// que2.js:17 French Polynesia,Oceania,Polynesia,280904
// que2.js:17 Panama,Americas,Central America,4314768
// que2.js:17 United States,Americas,North America,329484123
// que2.js:17 Nepal,Asia,Southern Asia,29136808
// que2.js:17 Myanmar,Asia,South-Eastern Asia,54409794
// que2.js:17 Falkland Islands,Americas,South America,2563
// que2.js:17 Hungary,Europe,Central Europe,9749763
// que2.js:17 Palau,Oceania,Micronesia,18092
// que2.js:17 Equatorial Guinea,Africa,Middle Africa,1402985
// que2.js:17 Guinea,Africa,Western Africa,13132792
// que2.js:17 United Arab Emirates,Asia,Western Asia,9890400
// que2.js:17 Turks and Caicos Islands,Americas,Caribbean,38718
// que2.js:17 British Virgin Islands,Americas,Caribbean,30237
// que2.js:17 Liechtenstein,Europe,Western Europe,38137
// que2.js:17 Bosnia and Herzegovina,Europe,Southeast Europe,3280815
// que2.js:17 Malawi,Africa,Eastern Africa,19129955
// que2.js:17 Bhutan,Asia,Southern Asia,771612
// que2.js:17 Cameroon,Africa,Middle Africa,26545864
// que2.js:17 Andorra,Europe,Southern Europe,77265
// que2.js:17 Guadeloupe,Americas,Caribbean,400132
// que2.js:17 Republic of the Congo,Africa,Middle Africa,5657000
// que2.js:17 Réunion,Africa,Eastern Africa,840974
// que2.js:17 Burkina Faso,Africa,Western Africa,20903278
// que2.js:17 Jordan,Asia,Western Asia,10203140
// que2.js:17 DR Congo,Africa,Middle Africa,108407721
// que2.js:17 Tokelau,Oceania,Polynesia,1411
// que2.js:17 Vietnam,Asia,South-Eastern Asia,97338583
// que2.js:17 Sint Maarten,Americas,Caribbean,40812
// que2.js:17 Belgium,Europe,Western Europe,11555997
// que2.js:17 United States Minor Outlying Islands,Americas,North America,300
// que2.js:17 Brazil,Americas,South America,212559409
// que2.js:17 Belize,Americas,Central America,397621
// que2.js:17 Antigua and Barbuda,Americas,Caribbean,97928
// que2.js:17 Paraguay,Americas,South America,7132530
// que2.js:17 Benin,Africa,Western Africa,12123198
// que2.js:17 Brunei,Asia,South-Eastern Asia,437483
// que2.js:17 Bolivia,Americas,South America,11673029
// que2.js:17 Djibouti,Africa,Eastern Africa,988002
// que2.js:17 French Guiana,Americas,South America,254541
// que2.js:17 Canada,Americas,North America,38005238
// que2.js:17 Saint Pierre and Miquelon,Americas,North America,6069
// que2.js:17 Japan,Asia,Eastern Asia,125836021
// que2.js:17 Rwanda,Africa,Eastern Africa,12952209
// que2.js:17 Saint Vincent and the Grenadines,Americas,Caribbean,110947
// que2.js:17 Iceland,Europe,Northern Europe,366425
// que2.js:17 Belarus,Europe,Eastern Europe,9398861
// que2.js:17 Hong Kong,Asia,Eastern Asia,7500700
// que2.js:17 Lesotho,Africa,Southern Africa,2142252
// que2.js:17 Fiji,Oceania,Melanesia,896444
// que2.js:17 Austria,Europe,Central Europe,8917205
// que2.js:17 Colombia,Americas,South America,50882884
// que2.js:17 Gabon,Africa,Middle Africa,2225728
// que2.js:17 Saudi Arabia,Asia,Western Asia,34813867
// que2.js:17 South Georgia,Antarctic,undefined,30
// que2.js:17 Ethiopia,Africa,Eastern Africa,114963583
// que2.js:17 Caribbean Netherlands,Americas,Caribbean,25987
// que2.js:17 Monaco,Europe,Western Europe,39244
// que2.js:17 North Korea,Asia,Eastern Asia,25778815
// que2.js:17 Italy,Europe,Southern Europe,59554023
// que2.js:17 Namibia,Africa,Southern Africa,2540916
// que2.js:17 Mongolia,Asia,Eastern Asia,3278292
// que2.js:17 Solomon Islands,Oceania,Melanesia,686878
// que2.js:17 Yemen,Asia,Western Asia,29825968
// que2.js:17 Romania,Europe,Southeast Europe,19286123
// que2.js:17 Svalbard and Jan Mayen,Europe,Northern Europe,2562
// que2.js:17 France,Europe,Western Europe,67391582