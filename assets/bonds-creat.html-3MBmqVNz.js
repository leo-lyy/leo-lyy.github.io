import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o,c as l,b as e,d as a,e as n,f as i}from"./app-poNQLxka.js";const d={},p=e("h1",{id:"fix-bond-create-lammps中形成新键",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fix-bond-create-lammps中形成新键","aria-hidden":"true"},"#"),a(" fix bond/create: LAMMPS中形成新键")],-1),c={href:"https://docs.lammps.org/fix_bond_create.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://docs.lammps.org/Manual.html",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"package依赖",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#package依赖","aria-hidden":"true"},"#"),a(" Package依赖")],-1),h={href:"https://docs.lammps.org/Packages_details.html#pkg-mc",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"-D PKG_MC=yes",-1),x=i(`<h2 id="语法与案例" tabindex="-1"><a class="header-anchor" href="#语法与案例" aria-hidden="true">#</a> 语法与案例</h2><p><strong>简单用法：</strong></p><div class="language-lmp line-numbers-mode" data-ext="lmp"><pre class="language-lmp"><code>fix 1 all bond/create 20 1 2 1.1 3 prob 0.98 1213 iparam 2 3 jpram 3 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其含义为，每20步判定一次是否成键，粒子类型（Particle Type）为1和2之间可以成键，且两者的距离小于1.1单位距离，新成键的类型（Bond Type）为3，成键的概率为0.98，随机数种子为1213。其中第一个能成键的粒子类型（即iparam，这里对应为1）最多有两个化学键，当达到“饱和”后，这个粒子的类型变为3；相应地，能成键的2号粒子类型最多能有3个键，当达到“饱和”以后，粒子类型变为4。</p><p>成键步骤完成后，需要在<code>read_data</code>中给新形成的键/键角/二面角等作用，预留出编号空间</p>`,5),_=e("div",{class:"language-lmp line-numbers-mode","data-ext":"lmp"},[e("pre",{lmp:"",class:"language-lmp"},[e("code",null,`read_data file keyword args ...

keword=extra/atom/types or extra/bond/types or extra/angle/types or 
extra/dihedral/types or extra/improper/types or extra/bond/per/atom or
extra/angle/per/atom or extra/dihedral/per/atom or extra/improper/per/atom

extra/atom/types arg = # of extra atom types
extra/bond/types arg = # of extra bond types
extra/angle/types arg = # of extra angle types
extra/dihedral/types arg = # of extra dihedral types
extra/improper/types arg = # of extra improper types
extra/bond/per/atom arg = leave space for this many new bonds per atom
extra/angle/per/atom arg = leave space for this many new angles per atom
extra/dihedral/per/atom arg = leave space for this many new dihedrals per atom
extra/improper/per/atom arg = leave space for this many new impropers per atom
extra/special/per/atom arg = leave space for extra 1-2,1-3,1-4 interactions per atom
`)]),e("div",{class:"highlight-lines"},[e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),u={href:"https://docs.lammps.org/fix_bond_create.html",target:"_blank",rel:"noopener noreferrer"};function f(v,y){const r=s("ExternalLinkIcon");return o(),l("div",null,[p,e("p",null,[a("分子动力学模拟中通常不会涉及化学反应过程（反应力场例外），但出于一些特殊的需要（建立一个交联的网络模型），有一些简单粗暴的处理方式，比如LAMMPS中给出了"),e("a",c,[a("fix bond/create"),n(r)]),a("命令。 （本文档为个人笔记性质，具体以"),e("a",m,[a("官方Manual"),n(r)]),a("为准）")]),b,e("p",null,[a("本命令需要编译"),e("a",h,[a("MC package"),n(r)]),a(", 在编译命令中额外加入 "),g,a(" 即可。")]),x,_,e("p",null,[a("更多细节描述以手册中"),e("a",u,[a("fix bond/create command"),n(r)]),a("为准")])])}const w=t(d,[["render",f],["__file","bonds-creat.html.vue"]]);export{w as default};
