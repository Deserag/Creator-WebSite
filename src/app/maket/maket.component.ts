import { Component, OnInit, AfterViewInit } from '@angular/core';
import grapesjs from "grapesjs";
import 'grapesjs-plugin-export';
import 'grapesjs-lory-slider';
import 'grapesjs-custom-code';
import 'grapesjs-tabs';
import 'grapesjs-blocks-basic';
import 'grapesjs-preset-webpage'; // Добавлен импорт плагина

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
        'gjs-preset-webpage', // Добавлен плагин
        'gjs-blocks-basic',
        'gjs-plugin-export',
        'gjs-lory-slider',
        'gjs-custom-code',
        'gjs-tabs'
      ],
<<<<<<< HEAD
      blockManager: {
        appendTo: '.myblocks',
        blocks: [
          {
            id: 'image',
            label: 'Image',
            media: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
      </svg>`,
            content: { type: 'image' },
            activate: true
=======
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
>>>>>>> github/master
          }
        ]
      },
      canvas: {
        styles: [
          'https://unpkg.com/grapesjs/dist/css/grapes.min.css'
        ]
      }
    });
<<<<<<< HEAD
=======

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
>>>>>>> github/master
  }
}
