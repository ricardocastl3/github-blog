import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import {
  HeaderContainer,
  ListItems,
  NavContent,
  NavItemProject,
  NavMostRecentProject,
  NavTrigger,
} from "./styles";
import { HiChevronDown } from "react-icons/hi2";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <strong>Github Blog</strong>
      </div>
      <div>
        <NavigationMenu.Root>
          <ListItems>


            <NavigationMenu.Item>
              <NavTrigger>
                Projects <HiChevronDown size={20} />
              </NavTrigger>
              <NavContent>

                <NavMostRecentProject>
                  <h2>Most Recent</h2>
                  <NavItemProject href="https://marketon-5n1e.vercel.app" target="_blank">
                    <div>
                      <h3>MarketON</h3>
                      <span>WebSites</span>
                    </div>
                    <p>Plataforma de venda online...</p>
                  </NavItemProject>

                  <NavItemProject href="https://marketon-5n1e.vercel.app" target="_blank">
                    <div>
                      <h3>MarketON</h3>
                      <span>WebSites</span>
                    </div>
                    <p>Plataforma de venda online...</p>
                  </NavItemProject>

                  <NavItemProject href="https://marketon-5n1e.vercel.app" target="_blank">
                    <div>
                      <h3>MarketON</h3>
                      <span>WebSites</span>
                    </div>
                    <p>Plataforma de venda online...</p>
                  </NavItemProject>






                </NavMostRecentProject>

                <NavMostRecentProject>
                  <h2>Tools</h2>
                  <NavItemProject href="https://marketon-5n1e.vercel.app" target="_blank">
                    <div>
                      <h3>MarketON</h3>
                      <span>WebSites</span>
                    </div>
                    <p>Plataforma de venda online...</p>
                  </NavItemProject>

                  <NavItemProject href="https://marketon-5n1e.vercel.app" target="_blank">
                    <div>
                      <h3>MarketON</h3>
                      <span>WebSites</span>
                    </div>
                    <p>Plataforma de venda online...</p>
                  </NavItemProject>

                  <NavItemProject href="https://marketon-5n1e.vercel.app" target="_blank">
                    <div>
                      <h3>MarketON</h3>
                      <span>WebSites</span>
                    </div>
                    <p>Plataforma de venda online...</p>
                  </NavItemProject>


                </NavMostRecentProject>

              </NavContent>
            </NavigationMenu.Item>

        
          </ListItems>
        </NavigationMenu.Root>
      </div>
    </HeaderContainer>
  );
}
