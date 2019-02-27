let normal = 
[
   "linear-gradient(180deg, #FF7B57 0%, #FF5151 50%, #F50F0F 100%)",
   "linear-gradient(180deg, #FF9757 0%, #FF6E51 50%, #F5350F 100%)",
   "linear-gradient(180deg, #FFB357 0%, #FF8B51 50%, #F55C0F 100%)",
   "linear-gradient(180deg, #FFD057 0%, #FFA851 50%, #F5820F 100%)",
   "linear-gradient(180deg, #FFEC57 0%, #FFC551 50%, #F5A90F 100%)",
   "linear-gradient(180deg, #F7FF57 0%, #FFE251 50%, #F5CF0F 100%)",
   "linear-gradient(180deg, #A3FF57 0%, #C5FF51 50%, #A9F50F 100%)",
   "linear-gradient(180deg, #6AFF57 0%, #8BFF51 50%, #5CF50F 100%)",
   "linear-gradient(180deg, #57FF7B 0%, #51FF51 50%, #0FF50F 100%)",
   "linear-gradient(180deg, #57FFB3 0%, #51FF8B 50%, #0FF55C 100%)",
   "linear-gradient(180deg, #57FFEC 0%, #51FFC5 50%, #0FF5A9 100%)",
   "linear-gradient(180deg, #57DBFF 0%, #51FFFF 50%, #0FF5F5 100%)",
   "linear-gradient(180deg, #5786FF 0%, #51A8FF 50%, #0F82F5 100%)",
   "linear-gradient(180deg, #EC57FF 0%, #C551FF 50%, #A90FF5 100%)",
   "linear-gradient(180deg, #FF57DB 0%, #FF51FF 50%, #F50FF5 100%)",
   "linear-gradient(180deg, #FF57A3 0%, #FF51C5 50%, #F50FA9 100%)",
   "linear-gradient(180deg, #FF576A 0%, #FF518B 50%, #F50F5C 100%)",
   "linear-gradient(180deg, #FF6D57 0%, #FF5160 50%, #F50F22 100%)"
];

let medium =
[
  "linear-gradient(180deg, #FF4400 0%, #DC1414 100%)",
  "linear-gradient(180deg, #FF6E00 0%, #DC3514 100%)",
  "linear-gradient(180deg, #FF9900 0%, #DC5714 100%)",
  "linear-gradient(180deg, #FFC400 0%, #DC7814 100%)",
  "linear-gradient(180deg, #FFEE00 0%, #DC9914 100%)",
  "linear-gradient(180deg, #E6FF00 0%, #DCBA14 100%)",
  "linear-gradient(180deg, #66FF00 0%, #99DC14 100%)",
  "linear-gradient(180deg, #11FF00 0%, #57DC14 100%)",
  "linear-gradient(180deg, #00FF44 0%, #14DC14 100%)",
  "linear-gradient(180deg, #00FF99 0%, #14DC57 100%)",
  "linear-gradient(180deg, #00FFEE 0%, #14DC99 100%)",
  "linear-gradient(180deg, #00BBFF 0%, #14DCDC 100%)",
  "linear-gradient(180deg, #003BFF 0%, #1478DC 100%)",
  "linear-gradient(180deg, #EE00FF 0%, #9914DC 100%)",
  "linear-gradient(180deg, #FF00BB 0%, #DC14DC 100%)",
  "linear-gradient(180deg, #FF0066 0%, #DC1499 100%)",
  "linear-gradient(180deg, #FF0011 0%, #DC1457 100%)",
  "linear-gradient(180deg, #FF2E00 0%, #DC1425 100%)"
];

let white =
[
 "linear-gradient(180deg, hsl(0, 0%, 87.1%) 0%, hsl(0, 0%, 63.1%) 100%)",
 "linear-gradient(180deg, hsl(46.4, 13.3%, 75.1%) 0%, hsl(43.5, 13.2%, 62.9%) 100%)",
 "linear-gradient(180deg, hsl(78.2, 35.2%, 85.5%) 0%, hsl(80.4, 20.3%, 76.9%) 100%)",
 "linear-gradient(180deg, hsl(180, 1.6%, 75.3%) 0%, hsl(210, 7.8%, 94.9%) 100%)",
 "linear-gradient(180deg, hsl(197.1, 13%, 89.2%) 0%, hsl(201.8, 11.1%, 80.2%) 100%)",
 "linear-gradient(180deg, hsl(203.1, 8.1%, 76.1%) 0%, hsl(228, 3.2%, 69.2%) 100%)"
]

function attachNewNode(target, normal, medium, white) 
{
  let length = normal.length;
  for (let i = 0; i < length; i++) 
  {
    let node = document.createElement('div');
    node.className = 'palette';
    node.style = `background: ${normal[i]}`;
    target.appendChild(node);
  }
}
attachNewNode(document.getElementById("normal-colours"), normal);
attachNewNode(document.getElementById("medium-colours"), medium);
attachNewNode(document.getElementById("white-colours"), white);
