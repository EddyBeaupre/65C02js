'use strict';

function decHex(d) {
    var h = (d).toString(16);
    return h.length % 2 ? '0' + h : h;
}

function docShow(Id, arg) {

    window['doc' + Id](arg);
    document.getElementById('doc-modal').style.display="block";
}

function docStatusRegister(status) {
    let i = 7;

    status.forEach(element => {
        document.getElementById('doc-sr-' + i.toString()).innerHTML = element !== null ? element : '&nbsp;';
        i--;
    });
}

function docOpCodes(opCodes) {
    let i = 0;

    opCodes.forEach(element => {
        document.getElementById('doc-oc-' + i.toString(16)).innerHTML = element !== null ? "0x" + decHex(element) : "&nbsp;";
        i++;
    });
}

function docADC() {
    document.getElementById('doc-title').innerHTML="ADC";
    document.getElementById('doc-description').innerHTML="<b>AD</b>d memory to accumulator with <b>C</b>arry";
    document.getElementById('doc-example').innerHTML="Accumulator + Memory + Carry &rarr; Accumulator";
    
    docStatusRegister(['N', 'V', null, null, null, null, 'Z', 'C']);
    docOpCodes([0x6d, null, 0x7d, 0x79, null, null, 0x69, null, null, null, 0x65, 0x61, 0x75, null, 0x72, 0x71]);
}

function docAND() {
    document.getElementById('doc-title').innerHTML="AND";
    document.getElementById('doc-description').innerHTML="<b>AND</b> accumulator with memory";
    document.getElementById('doc-example').innerHTML="Accumulator AND Memory &rarr; Accumulator";
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', null]);
    docOpCodes([0x2d, null, 0x3d, 0x39, null, null, 0x29, null, null, null, 0x25, 0x21, 0x35, null, 0x32, 0x31]);
}

function docASL() {
    document.getElementById('doc-title').innerHTML="ASL";
    document.getElementById('doc-description').innerHTML="<b>A</b>rithmetic <b>S</b>hift one bit <b>L</b>eft, memory or accumulator";
    document.getElementById('doc-example').innerHTML="C &larr; 7 6 5 4 3 2 1 0 &larr; 0";
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', 'M<span class="w3-tiny">7</span>']);
    docOpCodes([0x0e, null, 0x1e, null, null, 0x0a, null, null, null, null, 0x06, null, 0x16, null, null, null]);
}

function docBBR(bit) {
    document.getElementById('doc-title').innerHTML="BRR" + bit.toString();
    document.getElementById('doc-description').innerHTML="<b>B</b>ranch on <b>B</b>it <b>R</b>eset";
    document.getElementById('doc-example').innerHTML="Branch on bit " + bit.toString() + " reset";
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, null, 0x0F + (bit << 4), null, null, null, null, null, null, null]);
}

function docBBS(bit) {
    document.getElementById('doc-title').innerHTML="BBS" + bit.toString();
    document.getElementById('doc-description').innerHTML="<b>B</b>ranch on <b>B</b>it <b>S</b>et";
    document.getElementById('doc-example').innerHTML="Branch on bit " + bit.toString() + " set";
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, null, 0x8F + (bit << 4), null, null, null, null, null, null, null]);
}

function docBCC() {
    document.getElementById('doc-title').innerHTML="BCC";
    document.getElementById('doc-description').innerHTML="<b>B</b>ranch on <b>C</b>arry <b>C</b>lear";
    document.getElementById('doc-example').innerHTML="Branch if C = 0";
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, null, 0x90, null, null, null, null, null, null, null]);
}

function docBCS() {
    document.getElementById('doc-title').innerHTML="BCS";
    document.getElementById('doc-description').innerHTML="<b>B</b>ranch on <b>C</b>arry <b>S</b>et";
    document.getElementById('doc-example').innerHTML="Branch if C = 1";
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, null, 0xB0, null, null, null, null, null, null, null]);
}

function docBEQ() {
    document.getElementById('doc-title').innerHTML="BEQ";
    document.getElementById('doc-description').innerHTML="<b>B</b>ranch if <B>EQ</B>ual";
    document.getElementById('doc-example').innerHTML="Branch if Z = 1";
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, null, 0xF0, null, null, null, null, null, null, null]);
}

function docBIT() {
    document.getElementById('doc-title').innerHTML="BIT";
    document.getElementById('doc-description').innerHTML="<b>BI</b>t <b>T</b>est with Accumulator";
    document.getElementById('doc-example').innerHTML="Branch if Z = 1";
    
    docStatusRegister(['M<span class="w3-tiny">7</span>', 'M<span class="w3-tiny">6</span>', null, null, null, null, 'Z', null]);
    docOpCodes([0x2c, null, 0x3c, null, null, null, 0x89, null, null, null, 0x24, null, 0x34, null, null, null]);
}

function docBMI() {
    document.getElementById('doc-title').innerHTML="BMI";
    document.getElementById('doc-description').innerHTML="<b>B</b>ranch if result <b>MI</b>nus";
    document.getElementById('doc-example').innerHTML="Branch if N = 1";
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, null, 0x30, null, null, null, null, null, null, null]);
}

function docBNE() {
    document.getElementById('doc-title').innerHTML="BNE";
    document.getElementById('doc-description').innerHTML="<b>B</b>ranch if <b>N</b>ot <b>E</b>qual";
    document.getElementById('doc-example').innerHTML="Branch if Z = 0";
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, null, 0xD0, null, null, null, null, null, null, null]);
}

function docBPL() {
    document.getElementById('doc-title').innerHTML="BPL";
    document.getElementById('doc-description').innerHTML="<b>B</b>ranch if result <b>PL</b>us";
    document.getElementById('doc-example').innerHTML="Branch if N = 0";
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, null, 0x10, null, null, null, null, null, null, null]);
}

function docBRA() {
    document.getElementById('doc-title').innerHTML="BRA";
    document.getElementById('doc-description').innerHTML="<b>B</b>ranch <b>A</b>lways";
    document.getElementById('doc-example').innerHTML="";
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, null, 0x80, null, null, null, null, null, null, null]);
}

function docBRK() {
    document.getElementById('doc-title').innerHTML="BRK";
    document.getElementById('doc-description').innerHTML="<b>BR</b>ea<b>K</b> instruction";
    document.getElementById('doc-example').innerHTML="";
    
    docStatusRegister([null, null, null, '1', '0', '1', null, null]);
    docOpCodes([null, null, null, null, null, null, null, null, null, 0x00, null, null, null, null, null, null]);
}

function docBVC() {
    document.getElementById('doc-title').innerHTML="BVC";
    document.getElementById('doc-description').innerHTML="<b>B</b>ranch on o<b>V</b>erflow <b>C</b>lear";
    document.getElementById('doc-example').innerHTML="Branch if V = 0";
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, null, 0x50, null, null, null, null, null, null, null]);
}

function docBVS() {
    document.getElementById('doc-title').innerHTML="BVS";
    document.getElementById('doc-description').innerHTML="<b>B</b>ranch on o<b>V</b>erflow <b>S</b>et";
    document.getElementById('doc-example').innerHTML="Branch if V = 1";
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, null, 0x70, null, null, null, null, null, null, null]);
}

function docCLC() {
    document.getElementById('doc-title').innerHTML="CLC";
    document.getElementById('doc-description').innerHTML="<b>CL</b>ear <b>C</b>ary flag";
    document.getElementById('doc-example').innerHTML="0 &rarr; C";
    
    docStatusRegister([null, null, null, null, null, null, null, 0]);
    docOpCodes([null, null, null, null, null, null, null, 0x18, null, null, null, null, null, null, null, null]);
}

function docCLD() {
    document.getElementById('doc-title').innerHTML="CLD";
    document.getElementById('doc-description').innerHTML="<b>CL</b>ear <b>D</b>ecimal mode";
    document.getElementById('doc-example').innerHTML="0 &rarr; D";
    
    docStatusRegister([null, null, null, null, 0, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, 0xd8, null, null, null, null, null, null, null, null]);
}

function docCLI() {
    document.getElementById('doc-title').innerHTML="CLI";
    document.getElementById('doc-description').innerHTML="<b>CL</b>ear <b>I</b>nterrupt disable bit";
    document.getElementById('doc-example').innerHTML="0 &rarr; I";
    
    docStatusRegister([null, null, null, null, null, 0, null, null]);
    docOpCodes([null, null, null, null, null, null, null, 0x58, null, null, null, null, null, null, null, null]);
}

function docCLV() {
    document.getElementById('doc-title').innerHTML="CLV";
    document.getElementById('doc-description').innerHTML="<b>CL</b>ear o<b>V</b>erflow flag";
    document.getElementById('doc-example').innerHTML="0 &rarr; V";
    
    docStatusRegister([null, 0, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, 0xb8, null, null, null, null, null, null, null, null]);
}

function docCMP() {
    document.getElementById('doc-title').innerHTML="CMP";
    document.getElementById('doc-description').innerHTML="<b>C</b>o<b>MP</b>are memory and accumulator";
    document.getElementById('doc-example').innerHTML="Accumulator = Memory";
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', 'C']);
    docOpCodes([0xcd, null, 0xdd, 0xd9, null, null, 0xc9, null, null, null, 0xc5, 0xc1, 0xd5, null, 0xd2, 0xd1]);
}

function docCPX() {
    document.getElementById('doc-title').innerHTML="CPX";
    document.getElementById('doc-description').innerHTML="<b>C</b>om<b>P</b>are memory and <b>X</b> register";
    document.getElementById('doc-example').innerHTML="X = Memory";
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', 'C']);
    docOpCodes([0xec, null, null, null, null, null, 0xe0, null, null, null, 0xe4, null, null, null, null, null]);
}

function docCPY() {
    document.getElementById('doc-title').innerHTML="CPY";
    document.getElementById('doc-description').innerHTML="<b>C</b>om<b>P</b>are memory and <b>Y</b> register";
    document.getElementById('doc-example').innerHTML="Y = Memory";
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', 'C']);
    docOpCodes([0xcc, null, null, null, null, null, 0xc0, null, null, null, 0xc4, null, null, null, null, null]);
}

function docDEC() {
    document.getElementById('doc-title').innerHTML="DEC";
    document.getElementById('doc-description').innerHTML="<b>DEC</b>rement memory or accumulate by one";
    document.getElementById('doc-example').innerHTML="Decrement";
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', null]);
    docOpCodes([0xce, null, 0xde, null, null, 0x3a, null, null, null, null, 0xc6, null, 0xd6, null, null, null]);
}

function docDEX() {
    document.getElementById('doc-title').innerHTML="DEX";
    document.getElementById('doc-description').innerHTML="<b>DE</b>crement <b>X</b> by one";
    document.getElementById('doc-example').innerHTML="X - 1 & rarr; X";
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', null]);
    docOpCodes([null, null, null, null, null, null, null, 0xca, null, null, null, null, null, null, null, null]);
}

function docDEY() {
    document.getElementById('doc-title').innerHTML="DEY";
    document.getElementById('doc-description').innerHTML="<b>DE</b>crement <b>Y</b> by one";
    document.getElementById('doc-example').innerHTML="Y - 1 &rarr; Y";
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', null]);
    docOpCodes([null, null, null, null, null, null, null, 0x88, null, null, null, null, null, null, null, null]);
}

function docEOR() {
    document.getElementById('doc-title').innerHTML="EOR";
    document.getElementById('doc-description').innerHTML="<b>E</b>xclusive <b>O</b>R memory with accumulator";
    document.getElementById('doc-example').innerHTML="Memory XOR Accumulator &larr; A";
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', null]);
    docOpCodes([0x4d, null, 0x5d, 0x59, null, null, 0x49, null, null, null, 0x45, 0x41, 0x55, null, 0x52, 0x51]);
}

function docINC() {
    document.getElementById('doc-title').innerHTML="INC";
    document.getElementById('doc-description').innerHTML="<b>INC</b>rement memory or accumulator";
    document.getElementById('doc-example').innerHTML="Increment";
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', null]);
    docOpCodes([0xee, null, 0xfe, null, null, 0x1a, null, null, null, null, 0xe6, null, 0xf6, null, null, null]);
}

function docINX() {
    document.getElementById('doc-title').innerHTML="INX";
    document.getElementById('doc-description').innerHTML="<b>IN</b>crement <b>X</b> register";
    document.getElementById('doc-example').innerHTML="X + 1 &rarr; X";
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', null]);
    docOpCodes([null, null, null, null, null, null, null, 0xe8, null, null, null, null, null, null, null, null]);
}

function docINY() {
    document.getElementById('doc-title').innerHTML="INY";
    document.getElementById('doc-description').innerHTML="<b>IN</b>crement <b>Y</b> register";
    document.getElementById('doc-example').innerHTML="Y + 1 &rarr; Y";
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', null]);
    docOpCodes([null, null, null, null, null, null, null, 0xc8, null, null, null, null, null, null, null, null]);
}

function docJMP() {
    document.getElementById('doc-title').innerHTML="JMP";
    document.getElementById('doc-description').innerHTML="<b>J</b>u<b>MP</b> to new location";
    document.getElementById('doc-example').innerHTML="";
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([0x4c, 0x7c, null, null, 0x6c, null, null, null, null, null, null, null, null, null, null, null]);
}

function docJSR() {
    document.getElementById('doc-title').innerHTML="JSR";
    document.getElementById('doc-description').innerHTML="<b>J</b>ump to <b>S</b>ub<b>R</b>outine";
    document.getElementById('doc-example').innerHTML="";
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([0x20, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}

function docLDA() {
    document.getElementById('doc-title').innerHTML="LDA";
    document.getElementById('doc-description').innerHTML="<b>L</b>oa<b>D</b> <b>A</b>ccumulator with memory";
    document.getElementById('doc-example').innerHTML="Memory &rarr; A";
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', null]);
    docOpCodes([0xad, null, 0xbd, 0xb9, null, null, 0xa9, null, null, null, 0xa5, 0xa1, 0xb5, null, 0xb2, 0xb1]);
}

function docLDX() {
    document.getElementById('doc-title').innerHTML="LDX";
    document.getElementById('doc-description').innerHTML="<b>L</b>oa<b>D</b> <b>X</b> register with memory";
    document.getElementById('doc-example').innerHTML="Memory &rarr; X";
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', null]);
    docOpCodes([0xae, null, null, 0xbe, null, null, 0xa2, null, null, null, 0xa6, null, null, 0xb6, null, null]);
}

function docLDY() {
    document.getElementById('doc-title').innerHTML="LDY";
    document.getElementById('doc-description').innerHTML="<b>L</b>oa<b>D</b> <b>Y</b> register with memory";
    document.getElementById('doc-example').innerHTML="Memory &rarr; Y";
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', null]);
    docOpCodes([0xac, null, 0xbc, null, null, null, 0xa0, null, null, null, 0xa4, null, 0xb4, null, null, null]);
}

function docLSR() {
    document.getElementById('doc-title').innerHTML="LSR";
    document.getElementById('doc-description').innerHTML="<b>L</b>ogical <b>S</b>hift one bit <b>R</b>ight memory or accumulator";
    document.getElementById('doc-example').innerHTML="0 &rarr; 7 6 5 4 3 2 1 0 &rarr; C";
    
    docStatusRegister(['0', null, null, null, null, null, 'Z', 'M<span class="w3-tiny">0</span>']);
    docOpCodes([0x4e, null, 0x5e, null, null, 0x4a, null, null, null, null, 0x46, null, 0x56, null, null, null]);
}

function docNOP() {
    document.getElementById('doc-title').innerHTML="NOP";
    document.getElementById('doc-description').innerHTML="<b>N</b>o <b>OP</b>eration";
    document.getElementById('doc-example').innerHTML="";
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, 0xea, null, null, null, null, null, null, null, null]);
}

function docORA() {
    document.getElementById('doc-title').innerHTML="ORA";
    document.getElementById('doc-description').innerHTML="<b>OR</b> Memory with <b>A</b>ccumulator";
    document.getElementById('doc-example').innerHTML="Accumulator <b>OR</b> Memory &rarr; Accumulator";
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', null]);
    docOpCodes([0x0d, null, 0x1d, 0x19, null, null, 0x09, null, null, null, 0x05, 0x01, 0x15, null, 0x12, 0x11]);
}

function docPHA() {
    document.getElementById('doc-title').innerHTML="PHA";
    document.getElementById('doc-description').innerHTML="<b>P</b>us<b>H</b> <b>A</b>ccumulator on stack";
    document.getElementById('doc-example').innerHTML='Accumulator &rarr; M<span class="w3-tiny">s</span>, S - 1 &rarr; S';
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, null, null, 0x48, null, null, null, null, null, null]);
}

function docPHP() {
    document.getElementById('doc-title').innerHTML="PHP";
    document.getElementById('doc-description').innerHTML="<b>P</b>us<b>H</b> <b>P</b>rocessor status on stack";
    document.getElementById('doc-example').innerHTML='P &rarr; M<span class="w3-tiny">s</span>, S - 1 &rarr; S';
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, null, null, 0x08, null, null, null, null, null, null]);
}

function docPHX() {
    document.getElementById('doc-title').innerHTML="PHX";
    document.getElementById('doc-description').innerHTML="<b>P</b>us<b>H</b> <b>X</b> register on stack";
    document.getElementById('doc-example').innerHTML='X &rarr; M<span class="w3-tiny">s</span>, S - 1 &rarr; S';
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, null, null, 0xda, null, null, null, null, null, null]);
}

function docPHY() {
    document.getElementById('doc-title').innerHTML="PHY";
    document.getElementById('doc-description').innerHTML="<b>P</b>us<b>H</b> <b>Y</b> register on stack";
    document.getElementById('doc-example').innerHTML='Y &rarr; M<span class="w3-tiny">s</span>, S - 1 &rarr; S';
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, null, null, 0x5a, null, null, null, null, null, null]);
}

function docPLA() {
    document.getElementById('doc-title').innerHTML="PLA";
    document.getElementById('doc-description').innerHTML="<b>P</b>u<b>L</b>l <b>A</b>ccumulator from stack";
    document.getElementById('doc-example').innerHTML='S + 1 &rarr; S, M<span class="w3-tiny">s</span> &rarr; Accumulator';
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', null]);
    docOpCodes([null, null, null, null, null, null, null, null, null, 0x68, null, null, null, null, null, null]);
}

function docPLP() {
    document.getElementById('doc-title').innerHTML="PLP";
    document.getElementById('doc-description').innerHTML="<b>P</b>u<b>L</b>l <b>P</b>rocessor status from stack";
    document.getElementById('doc-example').innerHTML='S + 1 &rarr; S, M<span class="w3-tiny">s</span> &rarr; P';
    
    docStatusRegister(['N', 'V', null, 'B', 'D', 'I', 'Z', 'C']);
    docOpCodes([null, null, null, null, null, null, null, null, null, 0x28, null, null, null, null, null, null]);
}

function docPLX() {
    document.getElementById('doc-title').innerHTML="PLX";
    document.getElementById('doc-description').innerHTML="<b>P</b>u<b>L</b>l <b>X</b> register from stack";
    document.getElementById('doc-example').innerHTML='S + 1 &rarr; S, M<span class="w3-tiny">s</span> &rarr; X';
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', null]);
    docOpCodes([null, null, null, null, null, null, null, null, null, 0xFA, null, null, null, null, null, null]);
}

function docPLY() {
    document.getElementById('doc-title').innerHTML="PLY";
    document.getElementById('doc-description').innerHTML="<b>P</b>u<b>L</b>l <b>Y</b> register from stack";
    document.getElementById('doc-example').innerHTML='S + 1 &rarr; S, M<span class="w3-tiny">s</span> &rarr; Y';
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', null]);
    docOpCodes([null, null, null, null, null, null, null, null, null, 0x7A, null, null, null, null, null, null]);
}

function docRMB(bit) {
    document.getElementById('doc-title').innerHTML="RMB" + bit.toString();
    document.getElementById('doc-description').innerHTML="<b>R</b>eset <b>M</b>emory <b>B</b>it <b>" + bit.toString() + "</b>";
    document.getElementById('doc-example').innerHTML='0 &rarr; M<span class="w3-tiny">' + bit.toString() + '</span>';
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, null, null, null, 0x07 + (bit << 4), null, null, null, null, null]);
}

function docROL() {
    document.getElementById('doc-title').innerHTML="ROL";
    document.getElementById('doc-description').innerHTML="<b>RO</b>tate one bit <b>L</b>eft memory or accumulator";
    document.getElementById('doc-example').innerHTML='C &larr; 7 6 5 4 3 2 1 0 &larr; C';
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', 'M<span class="w3-tiny">7</span>']);
    docOpCodes([0x2e, null, 0x3e, null, null, 0x2a, null, null, null, null, 0x26, null, 0x36, null, null, null]);
}

function docROR() {
    document.getElementById('doc-title').innerHTML="ROR";
    document.getElementById('doc-description').innerHTML="<b>RO</b>tate one bit <b>R</b>ight memory or accumulator";
    document.getElementById('doc-example').innerHTML='C &rarr; 7 6 5 4 3 2 1 0 &rarr; C';
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', 'M<span class="w3-tiny">0</span>']);
    docOpCodes([0x6e, null, 0x7e, null, null, 0x6a, null, null, null, null, 0x66, null, 0x76, null, null, null]);
}

function docRTI() {
    document.getElementById('doc-title').innerHTML="RTI";
    document.getElementById('doc-description').innerHTML="<b>R</b>e<b>T</b>urn from <b>I</b>nterrupt";
    document.getElementById('doc-example').innerHTML='';
    
    docStatusRegister(['N', 'V', null, null, 'D', 'I', 'Z', 'C']);
    docOpCodes([null, null, null, null, null, null, null, null, null, 0x40, null, null, null, null, null, null]);
}

function docRTS() {
    document.getElementById('doc-title').innerHTML="RTS";
    document.getElementById('doc-description').innerHTML="<b>R</b>e<b>T</b>urn from <b>S</b>ubroutine";
    document.getElementById('doc-example').innerHTML='';
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, null, null, 0x60, null, null, null, null, null, null]);
}

function docSBC() {
    document.getElementById('doc-title').innerHTML="SBC";
    document.getElementById('doc-description').innerHTML="<b>S</b>u<b>B</b>tract memory from accumulator with borrow (<b>C</b>arry bit)";
    document.getElementById('doc-example').innerHTML='Accumulator - Memory - (!C) &rarr; Accumulator';
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([0xed, null, 0xfd, 0xf9, null, null, 0xe9, null, null, null, 0xe5, 0xe1, 0xf5, null, 0xf2, 0xf1]);
}

function docSEC() {
    document.getElementById('doc-title').innerHTML="SEC";
    document.getElementById('doc-description').innerHTML="<b>SE</b>t <b>C</b>arry";
    document.getElementById('doc-example').innerHTML='1 &rarr; C';
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, 0x38, null, null, null, null, null, null, null, null]);
}

function docSED() {
    document.getElementById('doc-title').innerHTML="SED";
    document.getElementById('doc-description').innerHTML="<b>SE</b>t <b>D</b>ecimal mode";
    document.getElementById('doc-example').innerHTML='1 &rarr; D';
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, 0xf8, null, null, null, null, null, null, null, null]);
}

function docSEI() {
    document.getElementById('doc-title').innerHTML="SEI";
    document.getElementById('doc-description').innerHTML="<b>SE</b>t <b>I</b>nterrupt disable status";
    document.getElementById('doc-example').innerHTML='1 &rarr; I';
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, 0x78, null, null, null, null, null, null, null, null]);
}

function docSMB(bit) {
    document.getElementById('doc-title').innerHTML="SMB" + bit.toString();
    document.getElementById('doc-description').innerHTML="<b>S</b>et <b>M</b>emory <b>B</b>it <b>" + bit.toString() + "</b>";
    document.getElementById('doc-example').innerHTML='1 &rarr; M<span class="w3-tiny">' + bit.toString() + '</span>';
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, null, null, null, 0x87 + (bit << 4), null, null, null, null, null]);
}

function docSTA() {
    document.getElementById('doc-title').innerHTML="STA";
    document.getElementById('doc-description').innerHTML="<b>ST</b>ore <b>A</b>ccumulator in memory";
    document.getElementById('doc-example').innerHTML='Accumulator &rarr; Memory';
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([0x8d, null, 0x9d, 0x99, null, null, null, null, null, null, 0x85, 0x81, 0x95, null, 0x92, 0x91]);
}

function docSTP() {
    document.getElementById('doc-title').innerHTML="STP";
    document.getElementById('doc-description').innerHTML="<b>ST</b>o<b>P</b> mode";
    document.getElementById('doc-example').innerHTML='STOP (1 &rarr; PHI2)';
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, 0xdb, null, null, null, null, null, null, null, null]);
}

function docSTX() {
    document.getElementById('doc-title').innerHTML="STX";
    document.getElementById('doc-description').innerHTML="<b>ST</b>ore <b>X</b> register in memory";
    document.getElementById('doc-example').innerHTML='X &rarr; Memory';
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([0x8e, null, null, null, null, null, null, null, null, null, 0x86, null, null, 0x96, null, null]);
}

function docSTY() {
    document.getElementById('doc-title').innerHTML="STY";
    document.getElementById('doc-description').innerHTML="<b>ST</b>ore <b>X</b> register in memory";
    document.getElementById('doc-example').innerHTML='Y &rarr; Memory';
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([0x8c, null, null, null, null, null, null, null, null, null, 0x84, null, 0x94, null, null, null]);
}

function docSTZ() {
    document.getElementById('doc-title').innerHTML="STZ";
    document.getElementById('doc-description').innerHTML="<b>ST</b>ore <b>Z</b>ero in memory";
    document.getElementById('doc-example').innerHTML='0 &rarr; Memory';
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([0x9c, null, 0x9e, null, null, null, null, null, null, null, 0x64, null, 0x74, null, null, null]);
}

function docTAX() {
    document.getElementById('doc-title').innerHTML="TAX";
    document.getElementById('doc-description').innerHTML="<b>T</b>ransfer <b>A</b>ccumulator to <b>X</b> register";
    document.getElementById('doc-example').innerHTML='Accumulator &rarr; X';
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', null]);
    docOpCodes([null, null, null, null, null, null, null, 0xaa, null, null, null, null, null, null, null, null]);
}

function docTAY() {
    document.getElementById('doc-title').innerHTML="TAY";
    document.getElementById('doc-description').innerHTML="<b>T</b>ransfer <b>A</b>ccumulator to <b>Y</b> register";
    document.getElementById('doc-example').innerHTML='Accumulator &rarr; Y';
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', null]);
    docOpCodes([null, null, null, null, null, null, null, 0xa8, null, null, null, null, null, null, null, null]);
}

function docTRB() {
    document.getElementById('doc-title').innerHTML="TRB";
    document.getElementById('doc-description').innerHTML="<b>T</b>est and <b>R</b>eset memory <b>B</b>it";
    document.getElementById('doc-example').innerHTML='(!Accumulator) <b>AND</b> Memory &rarr; Memory';
    
    docStatusRegister([null, null, null, null, null, null, 'Z', null]);
    docOpCodes([0x1c, null, null, null, null, null, null, null, null, null, 0x14, null, null, null, null, null]);
}

function docTSB() {
    document.getElementById('doc-title').innerHTML="TSB";
    document.getElementById('doc-description').innerHTML="<b>T</b>est and <b>S</b>et memory <b>B</b>it";
    document.getElementById('doc-example').innerHTML='Accumulator <b>OR</b> Memory &rarr; Memory';
    
    docStatusRegister([null, null, null, null, null, null, 'Z', null]);
    docOpCodes([0x0c, null, null, null, null, null, null, null, null, null, 0x04, null, null, null, null, null]);
}

function docTSX() {
    document.getElementById('doc-title').innerHTML="TSX";
    document.getElementById('doc-description').innerHTML="<b>T</b>ransfer <b>S</b>tack pointer to <b>X</b> register";
    document.getElementById('doc-example').innerHTML='S &rarr; X';
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', null]);
    docOpCodes([null, null, null, null, null, null, null, 0xba, null, null, null, null, null, null, null, null]);
}

function docTXA() {
    document.getElementById('doc-title').innerHTML="TXA";
    document.getElementById('doc-description').innerHTML="<b>T</b>ransfer <b>X</b> register to <b>A</b>ccumulator";
    document.getElementById('doc-example').innerHTML='X &rarr; A';
    
    docStatusRegister(['N', null, null, null, null, null, 'Z', null]);
    docOpCodes([null, null, null, null, null, null, null, 0x8a, null, null, null, null, null, null, null, null]);
}

function docTXS() {
    document.getElementById('doc-title').innerHTML="TXS";
    document.getElementById('doc-description').innerHTML="<b>T</b>ransfer <b>X</b> register to <b>S</b>tack pointer";
    document.getElementById('doc-example').innerHTML='X &rarr; S';
    
    docStatusRegister([null, null, null, null, null, null, null, null]);
    docOpCodes([null, null, null, null, null, null, null, 0x9a, null, null, null, null, null, null, null, null]);
}

function docTYA() {
    document.getElementById('doc-title').innerHTML="TYA";
    document.getElementById('doc-description').innerHTML="<b>T</b>ransfer <b>Y</b> register to <b>A</b>ccumulator";
    document.getElementById('doc-example').innerHTML='Y &rarr; A';
    
    docStatusRegister(['A', null, null, null, null, null, 'Z', null]);
    docOpCodes([null, null, null, null, null, null, null, 0x98, null, null, null, null, null, null, null, null]);
}

function docWAI() {
    document.getElementById('doc-title').innerHTML="WAI";
    document.getElementById('doc-description').innerHTML="<b>WA</b>it for <b>I</b>nterrupt";
    document.getElementById('doc-example').innerHTML='0 &rarr; RDY';
    
    docStatusRegister([null, null, null, null, null, null, 'Z', null]);
    docOpCodes([null, null, null, null, null, null, null, 0xcb, null, null, null, null, null, null, null, null]);
}