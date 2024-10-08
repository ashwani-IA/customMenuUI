import { Component, ViewChild, OnInit } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { ImageModule } from 'primeng/image';

interface externalLink {
  label: string;
  url: string;
}
interface category {
  name: string;
}

interface collectionFace {
  name: string;
  image: string;
}

@Component({
  selector: 'app-sidePanel',
  templateUrl: './custom-panel.component.html',
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
    MenubarModule,
    InputTextModule,
    CommonModule,
    AccordionModule,
    ImageModule,
  ],
})
export class sidePanelComponent {
  searchVisible: boolean = false;
  toggleSearch() {
    this.searchVisible = !this.searchVisible; // Toggle the visibility of the input field
  }

  // main sidebar
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeSidePanel(event: any): void {
    this.sidebarRef.close(event);
    this.subSidebarVisible = false;
  }

  sidebarVisible: boolean = true;

  // subsidebar

  subSidebarVisible: boolean = true;

  // Function to open sub-sidebar
  openSubSidebar(categoryName: string) {
    this.subSidebarVisible = true;
    this.subSidebarCategory = categoryName;
  }
  subSidebarCategory: string = 'sample category';

  // extrenal links
  externalLinks!: externalLink[];

  // product categories
  categories!: category[];

  collectionList!: collectionFace[];

  ngOnInit() {
    this.externalLinks = [
      {
        label: 'link1',
        url: '#',
      },
      {
        label: 'link2',
        url: '#',
      },
      {
        label: 'link3',
        url: '#',
      },
    ];

    this.categories = [
      {
        name: 'watches',
      },
      {
        name: 'phones',
      },
      {
        name: 'laptops',
      },
      {
        name: 'tablets',
      },
    ];

    this.collectionList = [
      {
        name: 'collection Name',
        image:
          'https://media.bulgari.com/image/upload/c_pad,h_994,w_1500/q_auto/f_auto/1493082.png',
      },
      {
        name: 'collection Name',
        image:
          'https://media.bulgari.com/image/upload/c_pad,h_994,w_1500/q_auto/f_auto/1622467.png',
      },
      {
        name: 'collection Name',
        image:
          'https://media.bulgari.com/image/upload/c_pad,h_994,w_1500/q_auto/f_auto/1484563.png',
      },
      {
        name: 'collection Name',
        image:
          'https://media.bulgari.com/image/upload/c_pad,h_994,w_1500/q_auto/f_auto/1448009.png',
      },
      {
        name: 'collection Name',
        image:
          'https://media.bulgari.com/image/upload/c_pad,h_994,w_1500/q_auto/f_auto/1578377.png',
      },
    ];
  }
}
