import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Lian. I am a Full Stack Software Architect.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Machine Learning / Computer Vision / Cybersecurity / Blockchain"
      },
      // {
      //   id: "about-who-cares",
      //   title: "who-cares.txt",
      //   type: "file",
      //   content: ""
      // },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:starwarsrogueone1123@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                starwarsrogueone1123@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/ROSW1123"
                target="_blank"
                rel="noreferrer"
              >
                @ROSW1123
              </a>
            </li>
            <li>
              <a
                className="text-blue-300"
                href="https://scholar.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://lian-mac-os-portfolio.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                https://lian-mac-os-portfolio.netlify.app
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "commerce.sol",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-secondary-400">// SPDX-License-Identifier: Apache-License 2.0</span>
        </div>
        <div>
          <span className="text-red-400">pragma solidity ^</span>
          <span className="text-blue-400">0.8.9</span>
          <span  className="text-red-400">;</span>
        </div>
        <div style={{height:"8px",backgroundColor:"transparent"}}></div>
        <div>
          <span className="text-red-400">contract </span>
          <span className="text-indigo-400">BasicCommerce </span>
          <span className="text-secondary-400">{"{"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span>address </span>
          <span>public </span>
          <span>owner;</span>
        </div>
        <div style={{height:"8px",backgroundColor:"transparent"}}></div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-red-400">constructor</span>
          <span className="text-secondary-400">() {"{"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-secondary-400">owner </span>
          <span className="text-red-400">= </span>
          <span className="text-blue-400">msg</span>
          <span className="text-secondary-400">.</span>
          <span className="text-blue-400">sender</span>
          <span className="text-secondary-400">;</span>
        </div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-secondary-400">{"}"}</span>
        </div>

        <div style={{height:"8px",backgroundColor:"transparent"}}></div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-red-400">struct </span>
          <span className="text-indigo-400">Shop </span>
          <span className="text-secondary-400">() {"{"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-blue-400">address </span>
          <span className="text-secondary-400">identity</span>
          <span className="text-secondary-400">;</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-blue-400">string </span>
          <span className="text-secondary-400">title</span>
          <span className="text-secondary-400">;</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-blue-400">string </span>
          <span className="text-secondary-400">email</span>
          <span className="text-secondary-400">;</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-blue-400">uint8 </span>
          <span className="text-secondary-400">volumeTraded</span>
          <span className="text-secondary-400">;</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-secondary-400">Product[] </span>
          <span className="text-secondary-400">productsListed;</span>
        </div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-secondary-400">{"}"}</span>
        </div>

        <div style={{height:"8px",backgroundColor:"transparent"}}></div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-red-400">struct </span>
          <span className="text-indigo-400">Product </span>
          <span className="text-secondary-400">() {"{"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-blue-400">string </span>
          <span className="text-secondary-400">alphaId</span>
          <span className="text-secondary-400">;</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-blue-400">uint8 </span>
          <span className="text-secondary-400">price</span>
          <span className="text-secondary-400">;</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-blue-400">uint8 </span>
          <span className="text-secondary-400">amount</span>
          <span className="text-secondary-400">;</span>
        </div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-secondary-400">{"}"}</span>
        </div>

        <div style={{height:"8px",backgroundColor:"transparent"}}></div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-red-400">struct </span>
          <span className="text-indigo-400">Customer </span>
          <span className="text-secondary-400">() {"{"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-blue-400">address </span>
          <span className="text-secondary-400">identity</span>
          <span className="text-secondary-400">;</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-secondary-400">Product[] </span>
          <span className="text-secondary-400">productsBought;</span>
        </div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-secondary-400">{"}"}</span>
        </div>

        <div style={{height:"8px",backgroundColor:"transparent"}}></div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-red-400">mapping </span>
          <span className="text-secondary-400">{"("}</span>
          <span className="text-blue-400">uint8 </span>
          <span className="text-red-400">{"=>"} </span>
          <span className="text-secondary-400">Shop</span>
          <span className="text-secondary-400">{")"} </span>
          <span className="text-red-400">public </span>
          <span className="text-secondary-400">shops;</span>
        </div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-red-400">mapping </span>
          <span className="text-secondary-400">{"("}</span>
          <span className="text-blue-400">address </span>
          <span className="text-red-400">{"=>"} </span>
          <span className="text-blue-400">bool</span>
          <span className="text-secondary-400">{")"} </span>
          <span className="text-red-400">public </span>
          <span className="text-secondary-400">isShop;</span>
        </div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-red-400">mapping </span>
          <span className="text-secondary-400">{"("}</span>
          <span className="text-blue-400">address </span>
          <span className="text-red-400">{"=>"} </span>
          <span className="text-blue-400">bool</span>
          <span className="text-secondary-400">{")"} </span>
          <span className="text-red-400">public </span>
          <span className="text-secondary-400">isClient;</span>
        </div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-red-400">mapping </span>
          <span className="text-secondary-400">{"("}</span>
          <span className="text-blue-400">uint8 </span>
          <span className="text-red-400">{"=>"} </span>
          <span className="text-secondary-400">Customer</span>
          <span className="text-secondary-400">{")"} </span>
          <span className="text-red-400">public </span>
          <span className="text-secondary-400">clients;</span>
        </div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-blue-400">uint8 </span>
          <span className="text-red-400">public </span>
          <span className="text-secondary-400">shopAmount;</span>
        </div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-blue-400">uint8 </span>
          <span className="text-red-400">public </span>
          <span className="text-secondary-400">clientAmount;</span>
        </div>

        <div style={{height:"8px",backgroundColor:"transparent"}}></div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-red-400">function </span>
          <span className="text-indigo-400">addClient</span>
          <span className="text-secondary-400">{"()"} </span>
          <span className="text-red-400">public returns </span>
          <span className="text-secondary-400">{"("}</span>
          <span className="text-blue-400">uint8</span>
          <span className="text-secondary-400">{") {"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-red-400">require</span>
          <span className="">{"(isShop["}</span>
          <span className="text-blue-400">msg</span>
          <span>.</span>
          <span className="text-blue-400">sender</span>
          <span>{"]"}</span>
          <span className="text-red-400">{"!="}</span>
          <span className="text-blue-400">true</span>
          <span>,</span>
          <span className="text-blue-400">"no shop address can be customer"</span>
          <span>{");"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span>Customer </span>
          <span className="text-red-400">storage </span>
          <span>buyer </span>
          <span className="text-red-400"> = </span>
          <span>{"clients[clientAmount];"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span>buyer.identity </span>
          <span className="text-red-400"> = </span>
          <span className="text-blue-400">msg</span>
          <span>.</span>
          <span className="text-blue-400">sender</span>
          <span>;</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span>clientAmount</span>
          <span className="text-red-400">++</span>
          <span>;</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span>{"isClient["}</span>
          <span className="text-blue-400">msg</span>
          <span>.</span>
          <span className="text-blue-400">sender</span>
          <span>{"]"}</span>
          <span className="text-red-400">=</span>
          <span className="text-blue-400">true</span>
          <span>;</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-red-400">return </span>
          <span>clientAmount</span>
          <span className="text-red-400"> - </span>
          <span className="text-blue-400">1</span>
          <span>;</span>
        </div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span>{"}"}</span>
        </div>

        <div style={{height:"16px",backgroundColor:"transparent"}}></div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-red-400">function </span>
          <span className="text-indigo-400">addShop</span>
          <span className="text-secondary-400">{"("}</span>
          <span className="text-blue-400">string </span>
          <span className="text-red-400">memory </span>
          <span className="text-orange-400">_name</span>
          <span>, </span>
          <span className="text-blue-400">string </span>
          <span className="text-red-400">memory </span>
          <span className="text-orange-400">_email</span>
          <span>{") "}</span>
          <span className="text-red-400">public returns </span>
          <span className="text-secondary-400">{"("}</span>
          <span className="text-blue-400">uint8</span>
          <span className="text-secondary-400">{") {"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-red-400">require</span>
          <span className="">{"(isClient["}</span>
          <span className="text-blue-400">msg</span>
          <span>.</span>
          <span className="text-blue-400">sender</span>
          <span>{"]"}</span>
          <span className="text-red-400">{"=="}</span>
          <span className="text-blue-400">false</span>
          <span>,</span>
          <span className="text-blue-400">"no client address can be shop"</span>
          <span>{");"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span>Shop </span>
          <span className="text-red-400">storage </span>
          <span>shop </span>
          <span className="text-red-400"> = </span>
          <span>{"shops[shopAmount];"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span>shop.title </span>
          <span className="text-red-400"> = </span>
          <span>_name;</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span>shop.email </span>
          <span className="text-red-400"> = </span>
          <span>_email;</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span>shop.volumeTraded </span>
          <span className="text-red-400"> = </span>
          <span className="text-blue-400">0</span>
          <span>;</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span>shopAmount</span>
          <span className="text-red-400">++</span>
          <span>;</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span>{"isShop["}</span>
          <span className="text-blue-400">msg</span>
          <span>.</span>
          <span className="text-blue-400">sender</span>
          <span>{"]"}</span>
          <span className="text-red-400">=</span>
          <span className="text-blue-400">true</span>
          <span>;</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-red-400">return </span>
          <span>shopAmount</span>
          <span className="text-red-400"> - </span>
          <span className="text-blue-400">1</span>
          <span>;</span>
        </div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span>{"}"}</span>
        </div>

        <div style={{height:"16px",backgroundColor:"transparent"}}></div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-red-400">function </span>
          <span className="text-indigo-400">buyProduct</span>
          <span>{"("}</span>
          <span className="text-blue-400">uint8 </span>
          <span className="text-organge-400">_id</span>
          <span>, </span>
          <span className="text-blue-400">uint8 </span>
          <span className="text-organge-400">_alphaid</span>
          <span>, </span>
          <span className="text-blue-400">uint8 </span>
          <span className="text-organge-400">_clientId</span>
          <span>{")"} </span>
          <span className="text-red-400">public payable </span>
          <span>{"{"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span>Shop </span>
          <span className="text-red-400">storage </span>
          <span>shop </span>
          <span className="text-red-400">= </span>
          <span>shops[_id];</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span>Product </span>
          <span className="text-red-400">memory </span>
          <span>product </span>
          <span className="text-red-400">= </span>
          <span>shop.productsListed[_alphaid];</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-red-400">require</span>
          <span>{"(product.amount"}</span>
          <span className="text-red-400">{">"}</span>
          <span className="text-blue-400">0</span>
          <span>,</span>
          <span className="text-blue-400">"at least 1"</span>
          <span>;</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span>{"("}</span>
          <span className="text-blue-400">bool </span>
          <span className="text-orange-400">paid</span>
          <span>{",) "}</span>
          <span className="text-red-400">= </span>
          <span className="text-blue-400">payable</span>
          <span>(shop.identity).</span>
          <span className="text-blue-400">call</span>
          <span>{"{value:"}</span>
          <span className="text-blue-400">msg</span>
          <span>.</span>
          <span className="text-blue-400">value</span>
          <span>{"}("}</span>
          <span className="text-blue-400">""</span>
          <span>{");"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-red-400">if </span>
          <span>{"(paid) {"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"48px"}}></span>
          <span>product.amount</span>
          <span className="text-red-400">--</span>
          <span>;</span>
        </div>
        <div>
          <span style={{paddingLeft:"48px"}}></span>
          <span className="text-red-400">if </span>
          <span>{"(product.amount"}</span>
          <span className="text-red-400">==</span>
          <span className="text-blue-400">0</span>
          <span>{") {"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"64px"}}></span>
          <span className="text-red-400">if </span>
          <span>{"(_alphaid "}</span>
          <span className="text-red-400">!= </span>
          <span>shop.productsListed.length</span>
          <span className="text-blue-400">-1</span>
          <span>{") {"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"80px"}}></span>
          <span className="text-red-400">for </span>
          <span>{"("}</span>
          <span className="text-blue-400">uint8 </span>
          <span>j</span>
          <span className="text-red-400">=</span>
          <span>alphaid;j</span>
          <span className="text-red-400">{"<"}</span>
          <span>shop.productsListed.length;j</span>
          <span className="text-red-400">++</span>
          <span>{") {"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"96px"}}></span>
          <span>shop.productsListed[j]</span>
          <span className="text-red-400">=</span>
          <span>{"shop.productsListed[j"}</span>
          <span className="text-blue-400">+1</span>
          <span>{"];"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"80px"}}></span>
          <span>{"}"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"64px"}}></span>
          <span>{"}"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"64px"}}></span>
          <span>shop.productsListed.</span>
          <span className="text-indigo-400">pop</span>
          <span>();</span>
        </div>
        <div>
          <span style={{paddingLeft:"48px"}}></span>
          <span>{"}"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"48px"}}></span>
          <span>shop.volumeTraded</span>
          <span className="text-red-400">+=</span>
          <span className="text-blue-400">uint8</span>
          <span>{"("}</span>
          <span className="text-blue-400">msg</span>
          <span>.</span>
          <span className="text-blue-400">value</span>
          <span>{");"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"48px"}}></span>
          <span>Customer </span>
          <span className="text-red-400">storage </span>
          <span>client </span>
          <span className="text-red-400">= </span>
          <span>clients[_clientId];</span>
        </div>
        <div>
          <span style={{paddingLeft:"48px"}}></span>
          <span>client.productsBought.</span>
          <span className="text-indigo-400">push</span>
          <span>(product);</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span>{"}"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span>{"}"}</span>
        </div>

        <div style={{height:"16px",backgroundColor:"transparent"}}></div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-red-400">function </span>
          <span className="text-indigo-400">addProduct</span>
          <span>{"(Product "}</span>
          <span className="text-red-400">memory </span>
          <span className="text-orange-400">_list</span>
          <span>, </span>
          <span className="text-blue-400">uint8 </span>
          <span className="text-orange-400">_id</span>
          <span>{") "}</span>
          <span className="text-red-400">public payable </span>
          <span>{"{"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span>Shop </span>
          <span className="text-red-400">storage </span>
          <span>shop </span>
          <span className="text-red-400">= </span>
          <span>shops[_id];</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span>shop.productsListed.</span>
          <span className="text-indigo-400">push</span>
          <span>(_list);</span>
        </div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span>{"}"}</span>
        </div>

        <div style={{height:"16px",backgroundColor:"transparent"}}></div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-red-400">function </span>
          <span className="text-indigo-400">discountOneProductInOneShop</span>
          <span>{"("}</span>
          <span className="text-blue-400">uint8 </span>
          <span className="text-orange-400">_shop</span>
          <span>,</span>
          <span className="text-blue-400">uint8 </span>
          <span className="text-orange-400">_prod</span>
          <span>,</span>
          <span className="text-blue-400">uint8 </span>
          <span className="text-orange-400">_discountPercentInt</span>
          <span>{") "}</span>
          <span className="text-red-400">public </span>
          <span>{"{"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span>Shop </span>
          <span className="text-red-400">storage </span>
          <span>shop </span>
          <span className="text-red-400">= </span>
          <span>shops[_shop];</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-red-400">require</span>
          <span>{"(shop.identity"}</span>
          <span className="text-red-400">==</span>
          <span className="text-blue-400">msg</span>
          <span>.</span>
          <span className="text-blue-400">sender</span>
          <span>,</span>
          <span className="text-blue-400">"only be discounted by the shop owner"</span>
          <span>{");"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span>Product </span>
          <span className="text-red-400">memory </span>
          <span>product </span>
          <span className="text-red-400">= </span>
          <span className="text-indigo-400">returnShopPorducts</span>
          <span>(_shop)[_prod];</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span>product.price </span>
          <span className="text-red-400">= </span>
          <span>product.price </span>
          <span className="text-red-400">* </span>
          <span>_discountPercentInt </span>
          <span className="text-red-400">/ </span>
          <span className="text-blue-400">100</span>
          <span>;</span>
        </div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span>{"}"}</span>
        </div>

        <div style={{height:"16px",backgroundColor:"transparent"}}></div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-red-400">function </span>
          <span className="text-indigo-400">returnShop</span>
          <span>{"("}</span>
          <span className="text-blue-400">uint8 </span>
          <span className="text-orange-400">_id</span>
          <span>{") "}</span>
          <span className="text-red-400">public view returns </span>
          <span>{"(Shop "}</span>
          <span className="tetx-red-400">memory</span>
          <span>{") {"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="">Shop </span>
          <span className="text-red-400">memory </span>
          <span>shop </span>
          <span className="text-red-400">= </span>
          <span>shops[_id];</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-red-400">return </span>
          <span>shop;</span>
        </div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span>{"}"}</span>
        </div>

        <div style={{height:"16px",backgroundColor:"transparent"}}></div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-red-400">function </span>
          <span className="text-indigo-400">returnShopProducts</span>
          <span>{"("}</span>
          <span className="text-blue-400">uint8 </span>
          <span className="text-orange-400">_id</span>
          <span>{") "}</span>
          <span className="text-red-400">public view returns </span>
          <span>{"(Product[] "}</span>
          <span className="tetx-red-400">memory</span>
          <span>{") {"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-red-400">return </span>
          <span className="text-indigo-400">returnShop</span>
          <span>(_id).productsListed;</span>
        </div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span>{"}"}</span>
        </div>

        <div style={{height:"16px",backgroundColor:"transparent"}}></div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span className="text-red-400">function </span>
          <span className="text-indigo-400">returnBought</span>
          <span>{"("}</span>
          <span className="text-blue-400">uint8 </span>
          <span className="text-orange-400">_id</span>
          <span>{") "}</span>
          <span className="text-red-400">public view returns </span>
          <span>{"(Product[] "}</span>
          <span className="tetx-red-400">memory</span>
          <span>{") {"}</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="">Customer </span>
          <span className="text-red-400">memory </span>
          <span>client </span>
          <span className="text-red-400">= </span>
          <span>clients[_id];</span>
        </div>
        <div>
          <span style={{paddingLeft:"32px"}}></span>
          <span className="text-red-400">return </span>
          <span>client.productsBought;</span>
        </div>
        <div>
          <span style={{paddingLeft:"16px"}}></span>
          <span>{"}"}</span>
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];


export default terminal;
