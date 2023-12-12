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

    this.createMenu();
  }

  //Добавил

  createMenu(): void {
    const panelTop = document.createElement('div');
    panelTop.className = 'panel__top';
    document.body.appendChild(panelTop);


    //Добавляем кнопку сохранения
    const btnSave = document.createElement('button');
    btnSave.id = 'btn-save';
    btnSave.className = 'btn-save';
    btnSave.textContent = 'Save';
    btnSave.addEventListener('click', () => {
      const html = this.editor.getHtml();
      const css = this.editor.getCss();
      console.log(html);
      console.log(css);
      // Здесь вы можете выполнить дополнительные действия с экспортированным HTML и CSS
    });
    panelTop.appendChild(btnSave);

    //Добавляем кнопку для добавления кнопок на макет
    const btnAddButton = document.createElement('button');
    btnAddButton.id = 'btn-add-button';
    btnAddButton.className = 'btn-add-button';
    btnAddButton.textContent = 'Создать кнопку';
    btnAddButton.addEventListener('click', () => {
      const button = this.editor.DomComponents.addComponent({
        tagName: 'button',
        content: 'Кнопка',
        style: {}
      });
      const selectedComponent = this.editor.getSelected();
      if (selectedComponent) {
        selectedComponent.addChild(button);
      } else {
        this.editor.getModel().get('components').add(button);
      }
    });
    panelTop.appendChild(btnAddButton);
  }
}
