import { Component, OnInit, AfterViewInit } from '@angular/core';
import grapesjs from "grapesjs";
import 'grapesjs-plugin-export';
import 'grapesjs-lory-slider';
import 'grapesjs-custom-code';
import 'grapesjs-tabs';
import 'grapesjs-blocks-basic';

@Component({
  selector: 'app-maket',
  standalone: true,
  imports: [],
  templateUrl: './maket.component.html',
  styleUrl: './maket.component.css'
})
export class MaketComponent implements OnInit, AfterViewInit {
  editor: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.editor = grapesjs.init({
      container: '#gjs',
      plugins: [
        'gjs-preset-webpage',
        'gjs-blocks-basic',
        'gjs-plugin-export',
        'gjs-lory-slider',
        'gjs-custom-code',
        'gjs-tabs'
      ],
      pluginsOpts: {
        'gjs-blocks-basic': {
          blocks: {
            additional: {
              label: 'Additional',
              category: 'Extra',
              attributes: {class: 'gjs-block-section'},
              content: {
                type: 'section',
                content: `<h1>Additional Block</h1>`
              }
            }
          }
        }
      },
      canvas: {
        styles: [
          'https://unpkg.com/grapesjs/dist/css/grapes.min.css'
        ]
      }
    });
  }
}
