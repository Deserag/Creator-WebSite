import {Component,  OnInit} from '@angular/core';
import grapesjs from "grapesjs";
import 'grapesjs/dist/css/grapes.min.css';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [],
  templateUrl: './maket.component.html',
  styleUrl: './maket.component.less'
})

export class  MaketComponent implements OnInit {

  public editor: any = null;

  ngOnInit(): void {
    this.editor = this.initializeEditor();
  }

  initializeEditor(): any {
    return grapesjs.init({
      container: '#gjs',
      fromElement: true,
      storageManager: false,
      autorender: true,
      forceClass: false,
      width: 'auto',
      height: '200rem',
      assetManager: {
        upload: false
      },
      plugins: ['gjs-blocks-basic', 'grapesjs-tailwind'],
      pluginsOpts: {
        'gjs-preset-webpage': {},
        'grapesjs-tailwind': {}
      },
      canvas: {
        styles: ["https://unpkg.com/grapesjs/dist/css/grapes.min.css"],
        scripts: [],
      },
      blockManager: {
        blocks: [
          {
            id: 'blog-1',
            label: 'Blog',
            content: '\n' +
              '<div style="max-width: 1140px; margin: 3rem auto; padding: 0 15px; display: flex; flex-direction: row;">\n' +
              '  <div style="border: 2px solid #e2e8f0; border-radius: 8px; overflow: hidden; margin: 1.5rem;">\n' +
              '    <img src="https://dummyimage.com/720x400" alt="blog" style="width: 100%; height: 300px; object-fit: cover;">\n' +
              '    <div style="padding: 20px;">\n' +
              '      <h2 style="font-size: 12px; font-weight: 500; color: #9CA3AF; margin-bottom: 5px;">CATEGORY</h2>\n' +
              '      <h1 style="font-size: 18px; font-weight: 500; color: #111827; margin-bottom: 15px;">The Catalyzer</h1>\n' +
              '      <p style="font-size: 16px; color: #9CA3AF; margin-bottom: 15px;">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>\n' +
              '      <div style="display: flex; align-items: center; justify-content: space-between;">\n' +
              '        <a href="#" style="color: #4F46E5; text-decoration: none; display: inline-flex; align-items: center;">Learn More</a>\n' +
              '        <div style="display: flex; justify-content: center; align-items: center; flex-direction: row">\n' +
              '          <div style="margin-right: 0.65rem">\n' +
              '            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 16 16" height="16" width="16"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.5 9.375a1.875 1.875 0 1 0 0 -3.75 1.875 1.875 0 0 0 0 3.75Z" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.5 2.25C3 2.25 0.75 7.5 0.75 7.5S3 12.75 7.5 12.75 14.25 7.5 14.25 7.5 12 2.25 7.5 2.25Z" stroke-width="1"></path></svg>\n' +
              '            <span style="padding: 0.25rem; color: #9CA3AF">1.2K |</span>\n' +
              '          </div>\n' +
              '          <div>\n' +
              '            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 16 16" height="16" width="16"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.386 5.9430000000000005h6.228" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.386 9.057h4.151999999999999" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.503 0.75a6.7604999999999995 6.7604999999999995 0 0 0 -5.97 3.5925000000000002 6.726 6.726 0 0 0 0.3975 6.9465L0.753 14.25l3.1500000000000004 -1.0619999999999998a6.759 6.759 0 0 0 10.08 -3.8325000000000005 6.723000000000001 6.723000000000001 0 0 0 -1.089 -5.916A6.747 6.747 0 0 0 7.503 0.75v0Z" stroke-width="1"></path></svg>\n' +
              '            <span style="padding: 0.25rem; color: #9CA3AF">6</span>\n' +
              '          </div>\n' +
              '        </div>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '  <div style="border: 2px solid #e2e8f0; border-radius: 8px; overflow: hidden; margin: 1.5rem;">\n' +
              '    <img src="https://dummyimage.com/720x400" alt="blog" style="width: 100%; height: 300px; object-fit: cover;">\n' +
              '    <div style="padding: 20px;">\n' +
              '      <h2 style="font-size: 12px; font-weight: 500; color: #9CA3AF; margin-bottom: 5px;">CATEGORY</h2>\n' +
              '      <h1 style="font-size: 18px; font-weight: 500; color: #111827; margin-bottom: 15px;">The Catalyzer</h1>\n' +
              '      <p style="font-size: 16px; color: #9CA3AF; margin-bottom: 15px;">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>\n' +
              '      <div style="display: flex; align-items: center; justify-content: space-between;">\n' +
              '        <a href="#" style="color: #4F46E5; text-decoration: none; display: inline-flex; align-items: center;">Learn More</a>\n' +
              '        <div style="display: flex; justify-content: center; align-items: center; flex-direction: row">\n' +
              '          <div style="margin-right: 0.65rem">\n' +
              '            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 16 16" height="16" width="16"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.5 9.375a1.875 1.875 0 1 0 0 -3.75 1.875 1.875 0 0 0 0 3.75Z" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.5 2.25C3 2.25 0.75 7.5 0.75 7.5S3 12.75 7.5 12.75 14.25 7.5 14.25 7.5 12 2.25 7.5 2.25Z" stroke-width="1"></path></svg>\n' +
              '            <span style="padding: 0.25rem; color: #9CA3AF">1.2K |</span>\n' +
              '          </div>\n' +
              '          <div>\n' +
              '            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 16 16" height="16" width="16"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.386 5.9430000000000005h6.228" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.386 9.057h4.151999999999999" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.503 0.75a6.7604999999999995 6.7604999999999995 0 0 0 -5.97 3.5925000000000002 6.726 6.726 0 0 0 0.3975 6.9465L0.753 14.25l3.1500000000000004 -1.0619999999999998a6.759 6.759 0 0 0 10.08 -3.8325000000000005 6.723000000000001 6.723000000000001 0 0 0 -1.089 -5.916A6.747 6.747 0 0 0 7.503 0.75v0Z" stroke-width="1"></path></svg>\n' +
              '            <span style="padding: 0.25rem; color: #9CA3AF">6</span>\n' +
              '          </div>\n' +
              '        </div>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '  <div style="border: 2px solid #e2e8f0; border-radius: 8px; overflow: hidden; margin: 1.5rem;">\n' +
              '    <img src="https://dummyimage.com/720x400" alt="blog" style="width: 100%; height: 300px; object-fit: cover;">\n' +
              '    <div style="padding: 20px;">\n' +
              '      <h2 style="font-size: 12px; font-weight: 500; color: #9CA3AF; margin-bottom: 5px;">CATEGORY</h2>\n' +
              '      <h1 style="font-size: 18px; font-weight: 500; color: #111827; margin-bottom: 15px;">The Catalyzer</h1>\n' +
              '      <p style="font-size: 16px; color: #9CA3AF; margin-bottom: 15px;">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>\n' +
              '      <div style="display: flex; align-items: center; justify-content: space-between;">\n' +
              '        <a href="#" style="color: #4F46E5; text-decoration: none; display: inline-flex; align-items: center;">Learn More</a>\n' +
              '        <div style="display: flex; justify-content: center; align-items: center; flex-direction: row">\n' +
              '          <div style="margin-right: 0.65rem">\n' +
              '            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 16 16" height="16" width="16"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.5 9.375a1.875 1.875 0 1 0 0 -3.75 1.875 1.875 0 0 0 0 3.75Z" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.5 2.25C3 2.25 0.75 7.5 0.75 7.5S3 12.75 7.5 12.75 14.25 7.5 14.25 7.5 12 2.25 7.5 2.25Z" stroke-width="1"></path></svg>\n' +
              '            <span style="padding: 0.25rem; color: #9CA3AF">1.2K |</span>\n' +
              '          </div>\n' +
              '          <div>\n' +
              '            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 16 16" height="16" width="16"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.386 5.9430000000000005h6.228" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.386 9.057h4.151999999999999" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.503 0.75a6.7604999999999995 6.7604999999999995 0 0 0 -5.97 3.5925000000000002 6.726 6.726 0 0 0 0.3975 6.9465L0.753 14.25l3.1500000000000004 -1.0619999999999998a6.759 6.759 0 0 0 10.08 -3.8325000000000005 6.723000000000001 6.723000000000001 0 0 0 -1.089 -5.916A6.747 6.747 0 0 0 7.503 0.75v0Z" stroke-width="1"></path></svg>\n' +
              '            <span style="padding: 0.25rem; color: #9CA3AF">6</span>\n' +
              '          </div>\n' +
              '        </div>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</div>\n',
            category: 'Blog',
            media: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 24 24"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M21.5625 1.4375H0.4791666666666667v21.083333333333336h21.083333333333336v-21.083333333333336Z" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 5.270833333333334h3.8333333333333335" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 15.8125h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.979166666666668 15.8125h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 17.729166666666668h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.979166666666668 17.729166666666668h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 19.645833333333336h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.979166666666668 19.645833333333336h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14.854166666666668 5.270833333333334h3.8333333333333335" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.020833333333334 3.8333333333333335 9.583333333333334 5.270833333333334 11.020833333333334 6.708333333333334 12.458333333333334 5.270833333333334 11.020833333333334 3.8333333333333335Z" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M18.6875 9.104166666666668h-15.333333333333334v3.8333333333333335h15.333333333333334v-3.8333333333333335Z" stroke-width="1"></path></svg>',
          },
          {
            id: 'blog-2',
            label: 'Blog-2',
            content: '<section style="margin: 3rem">\n' +
              '  <div style="max-width: 1140px; margin: 0 auto; padding: 0 15px;">\n' +
              '    <div style="display: flex; margin: -15px;">\n' +
              '      <div style="padding: 15px; width: 33.3%;">\n' +
              '        <div style="background-color: rgba(200, 200, 200, 0.75); padding: 20px; border-radius: 8px; overflow: hidden; position: relative; text-align: center;">\n' +
              '          <h2 style="font-size: 12px; font-weight: 500; color: #9CA3AF; margin-bottom: 5px;">CATEGORY</h2>\n' +
              '          <h1 style="font-size: 24px; font-weight: 500; color: #111827; margin-bottom: 15px;">Raclette Blueberry Nextious</h1>\n' +
              '          <p style="font-size: 16px; color: #9CA3AF; margin-bottom: 15px;">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>\n' +
              '          <a style="margin: 0.75rem; color: #4F46E5; text-decoration: none; display: flex; justify-content: center; align-items: center;" href="#">Learn More</a>\n' +
              '          <div style="width: 100%; display: flex; justify-content: center; align-items: center;">\n' +
              '            <div>\n' +
              '              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 16 16" height="16" width="16"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.5 9.375a1.875 1.875 0 1 0 0 -3.75 1.875 1.875 0 0 0 0 3.75Z" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.5 2.25C3 2.25 0.75 7.5 0.75 7.5S3 12.75 7.5 12.75 14.25 7.5 14.25 7.5 12 2.25 7.5 2.25Z" stroke-width="1"></path></svg>\n' +
              '              <span style="color: #9CA3AF; display: inline-flex; align-items: center;">1.2K </span>\n' +
              '            </div>\n' +
              '            <div>\n' +
              '              <span style="margin: 10px">|</span>\n' +
              '            </div>\n' +
              '            <div>\n' +
              '              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 16 16" height="16" width="16"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.386 5.9430000000000005h6.228" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.386 9.057h4.151999999999999" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.503 0.75a6.7604999999999995 6.7604999999999995 0 0 0 -5.97 3.5925000000000002 6.726 6.726 0 0 0 0.3975 6.9465L0.753 14.25l3.1500000000000004 -1.0619999999999998a6.759 6.759 0 0 0 10.08 -3.8325000000000005 6.723000000000001 6.723000000000001 0 0 0 -1.089 -5.916A6.747 6.747 0 0 0 7.503 0.75v0Z" stroke-width="1"></path></svg>\n' +
              '              <span style="color: #9CA3AF; display: inline-flex; align-items: center; margin-right: 20px;">6</span>\n' +
              '            </div>\n' +
              '          </div>\n' +
              '        </div>\n' +
              '      </div>\n' +
              '      <div style="padding: 15px; width: 33.3%;">\n' +
              '        <div style="background-color: rgba(200, 200, 200, 0.75); padding: 20px; border-radius: 8px; overflow: hidden; position: relative; text-align: center;">\n' +
              '          <h2 style="font-size: 12px; font-weight: 500; color: #9CA3AF; margin-bottom: 5px;">CATEGORY</h2>\n' +
              '          <h1 style="font-size: 24px; font-weight: 500; color: #111827; margin-bottom: 15px;">Ennui Snackwave Thundercats</h1>\n' +
              '          <p style="font-size: 16px; color: #9CA3AF; margin-bottom: 15px;">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>\n' +
              '          <a style="margin: 0.75rem; color: #4F46E5; text-decoration: none; display: flex; justify-content: center; align-items: center;" href="#">Learn More</a>\n' +
              '          <div style="width: 100%; display: flex; justify-content: center; align-items: center;">\n' +
              '            <div>\n' +
              '              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 16 16" height="16" width="16"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.5 9.375a1.875 1.875 0 1 0 0 -3.75 1.875 1.875 0 0 0 0 3.75Z" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.5 2.25C3 2.25 0.75 7.5 0.75 7.5S3 12.75 7.5 12.75 14.25 7.5 14.25 7.5 12 2.25 7.5 2.25Z" stroke-width="1"></path></svg>\n' +
              '              <span style="color: #9CA3AF; display: inline-flex; align-items: center;">1.2K </span>\n' +
              '            </div>\n' +
              '            <div>\n' +
              '              <span style="margin: 10px">|</span>\n' +
              '            </div>\n' +
              '            <div>\n' +
              '              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 16 16" height="16" width="16"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.386 5.9430000000000005h6.228" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.386 9.057h4.151999999999999" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.503 0.75a6.7604999999999995 6.7604999999999995 0 0 0 -5.97 3.5925000000000002 6.726 6.726 0 0 0 0.3975 6.9465L0.753 14.25l3.1500000000000004 -1.0619999999999998a6.759 6.759 0 0 0 10.08 -3.8325000000000005 6.723000000000001 6.723000000000001 0 0 0 -1.089 -5.916A6.747 6.747 0 0 0 7.503 0.75v0Z" stroke-width="1"></path></svg>\n' +
              '              <span style="color: #9CA3AF; display: inline-flex; align-items: center; margin-right: 20px;">6</span>\n' +
              '            </div>\n' +
              '          </div>\n' +
              '        </div>\n' +
              '      </div>\n' +
              '      <div style="padding: 15px; width: 33.3%;">\n' +
              '        <div style="background-color: rgba(200, 200, 200, 0.75); padding: 20px; border-radius: 8px; overflow: hidden; position: relative; text-align: center;">\n' +
              '          <h2 style="font-size: 12px; font-weight: 500; color: #9CA3AF; margin-bottom: 5px;">CATEGORY</h2>\n' +
              '          <h1 style="font-size: 24px; font-weight: 500; color: #111827; margin-bottom: 15px;">Selvage Poke Waistcoat Godard</h1>\n' +
              '          <p style="font-size: 16px; color: #9CA3AF; margin-bottom: 15px;">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>\n' +
              '          <a style="margin: 0.75rem; color: #4F46E5; text-decoration: none; display: flex; justify-content: center; align-items: center;" href="#">Learn More</a>\n' +
              '          <div style="width: 100%; display: flex; justify-content: center; align-items: center;">\n' +
              '            <div>\n' +
              '              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 16 16" height="16" width="16"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.5 9.375a1.875 1.875 0 1 0 0 -3.75 1.875 1.875 0 0 0 0 3.75Z" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.5 2.25C3 2.25 0.75 7.5 0.75 7.5S3 12.75 7.5 12.75 14.25 7.5 14.25 7.5 12 2.25 7.5 2.25Z" stroke-width="1"></path></svg>\n' +
              '              <span style="color: #9CA3AF; display: inline-flex; align-items: center;">1.2K </span>\n' +
              '            </div>\n' +
              '            <div>\n' +
              '              <span style="margin: 10px">|</span>\n' +
              '            </div>\n' +
              '            <div>\n' +
              '              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 16 16" height="16" width="16"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.386 5.9430000000000005h6.228" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.386 9.057h4.151999999999999" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.503 0.75a6.7604999999999995 6.7604999999999995 0 0 0 -5.97 3.5925000000000002 6.726 6.726 0 0 0 0.3975 6.9465L0.753 14.25l3.1500000000000004 -1.0619999999999998a6.759 6.759 0 0 0 10.08 -3.8325000000000005 6.723000000000001 6.723000000000001 0 0 0 -1.089 -5.916A6.747 6.747 0 0 0 7.503 0.75v0Z" stroke-width="1"></path></svg>\n' +
              '              <span style="color: #9CA3AF; display: inline-flex; align-items: center; margin-right: 20px;">6</span>\n' +
              '            </div>\n' +
              '          </div>\n' +
              '        </div>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</section>\n',
            category: 'Blog',
            media: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 24 24"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M21.5625 1.4375H0.4791666666666667v21.083333333333336h21.083333333333336v-21.083333333333336Z" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 5.270833333333334h3.8333333333333335" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 15.8125h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.979166666666668 15.8125h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 17.729166666666668h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.979166666666668 17.729166666666668h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 19.645833333333336h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.979166666666668 19.645833333333336h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14.854166666666668 5.270833333333334h3.8333333333333335" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.020833333333334 3.8333333333333335 9.583333333333334 5.270833333333334 11.020833333333334 6.708333333333334 12.458333333333334 5.270833333333334 11.020833333333334 3.8333333333333335Z" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M18.6875 9.104166666666668h-15.333333333333334v3.8333333333333335h15.333333333333334v-3.8333333333333335Z" stroke-width="1"></path></svg>'
          },
          {
            id: 'blog-3',
            label: "Blog-3",
            content: '<style>\n' +
              '  .container {\n' +
              '    max-width: 1280px;\n' +
              '    margin: 5rem auto;\n' +
              '    padding: 20px;\n' +
              '  }\n' +
              '  .section {\n' +
              '    background-color: #fff;\n' +
              '    padding: 20px;\n' +
              '    border-bottom: 1px solid #eee;\n' +
              '  }\n' +
              '  .section h2 {\n' +
              '    font-size: 1.5rem;\n' +
              '    font-weight: bold;\n' +
              '    margin-bottom: 10px;\n' +
              '  }\n' +
              '  .section p {\n' +
              '    font-size: 1rem;\n' +
              '    line-height: 1.5;\n' +
              '  }\n' +
              '  .section a {\n' +
              '    text-decoration: none;\n' +
              '    color: #007bff;\n' +
              '    font-size: 1rem;\n' +
              '    font-weight: bold;\n' +
              '    margin-top: 10px;\n' +
              '  }\n' +
              '  .section a:hover {\n' +
              '    text-decoration: underline;\n' +
              '  }\n' +
              '  .category {\n' +
              '    font-size: 1rem;\n' +
              '    font-weight: bold;\n' +
              '    margin-bottom: 10px;\n' +
              '  }\n' +
              '  .date {\n' +
              '    font-size: 0.8rem;\n' +
              '    color: #aaa;\n' +
              '  }\n' +
              '</style>\n' +
              '<div style="font-family: \'body-font\', sans-serif; background-color: #f7fafa;" class="container">\n' +
              '  <div class="section">\n' +
              '    <div class="category">\n' +
              '      <span class="category">CATEGORY</span>\n' +
              '      <span class="date">12 Jun 2019</span>\n' +
              '    </div>\n' +
              '    <div>\n' +
              '      <h2>Bitters hashtag waistcoat fashion axe chia unicorn</h2>\n' +
              '      <p>Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>\n' +
              '      <a href="#">Learn More\n' +
              '        <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">\n' +
              '          <path d="M5 12h14"></path>\n' +
              '          <path d="M12 5l7 7-7 7"></path>\n' +
              '        </svg>\n' +
              '      </a>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '  <div class="section">\n' +
              '    <div class="category">\n' +
              '      <span class="category">CATEGORY</span>\n' +
              '      <span class="date">12 Jun 2019</span>\n' +
              '    </div>\n' +
              '    <div>\n' +
              '      <h2>Meditation bushwick direct trade taxidermy shaman</h2>\n' +
              '      <p>Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>\n' +
              '      <a href="#">Learn More\n' +
              '        <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">\n' +
              '          <path d="M5 12h14"></path>\n' +
              '          <path d="M12 5l7 7-7 7"></path>\n' +
              '        </svg>\n' +
              '      </a>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '  <div class="section">\n' +
              '    <div class="category">\n' +
              '      <span class="category">CATEGORY</span>\n' +
              '      <span class="date">12 Jun 2019</span>\n' +
              '    </div>\n' +
              '    <div>\n' +
              '      <h2>Woke master cleanse drinking vinegar salvia</h2>\n' +
              '      <p>Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>\n' +
              '      <a href="#">Learn More\n' +
              '        <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">\n' +
              '          <path d="M5 12h14"></path>\n' +
              '          <path d="M12 5l7 7-7 7"></path>\n' +
              '        </svg>\n' +
              '      </a>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</div>\n',
            category: 'Blog',
            media: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 24 24"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M21.5625 1.4375H0.4791666666666667v21.083333333333336h21.083333333333336v-21.083333333333336Z" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 5.270833333333334h3.8333333333333335" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 15.8125h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.979166666666668 15.8125h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 17.729166666666668h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.979166666666668 17.729166666666668h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 19.645833333333336h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.979166666666668 19.645833333333336h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14.854166666666668 5.270833333333334h3.8333333333333335" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.020833333333334 3.8333333333333335 9.583333333333334 5.270833333333334 11.020833333333334 6.708333333333334 12.458333333333334 5.270833333333334 11.020833333333334 3.8333333333333335Z" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M18.6875 9.104166666666668h-15.333333333333334v3.8333333333333335h15.333333333333334v-3.8333333333333335Z" stroke-width="1"></path></svg>'
          },
          {
            id: 'blog-4',
            label: 'Blog-4',
            content: '<style>\n' +
              '  .container {\n' +
              '    max-width: 1280px;\n' +
              '    margin: 5rem auto;\n' +
              '    padding: 20px;\n' +
              '  }\n' +
              '  .blog-post {\n' +
              '    display: flex;\n' +
              '    flex-wrap: wrap;\n' +
              '    margin: -8px;\n' +
              '  }\n' +
              '  .blog-post-item {\n' +
              '    padding: 8px;\n' +
              '    width: 100%;\n' +
              '    max-width: 33.333%;\n' +
              '    box-sizing: border-box;\n' +
              '  }\n' +
              '  .blog-post-item h1 {\n' +
              '    font-size: 1.5rem;\n' +
              '    font-weight: bold;\n' +
              '    margin-bottom: 10px;\n' +
              '  }\n' +
              '  .blog-post-item p {\n' +
              '    font-size: 1rem;\n' +
              '    line-height: 1.5;\n' +
              '    margin-bottom: 10px;\n' +
              '  }\n' +
              '  .blog-post-item a {\n' +
              '    text-decoration: none;\n' +
              '    color: #007bff;\n' +
              '    font-size: 1rem;\n' +
              '    font-weight: bold;\n' +
              '    display: flex;\n' +
              '    align-items: center;\n' +
              '  }\n' +
              '  .blog-post-item a img {\n' +
              '    width: 40px;\n' +
              '    height: 40px;\n' +
              '    border-radius: 50%;\n' +
              '    margin-right: 10px;\n' +
              '    object-fit: cover;\n' +
              '    object-position: center;\n' +
              '  }\n' +
              '  .blog-post-item a:hover {\n' +
              '    text-decoration: underline;\n' +
              '  }\n' +
              '  .blog-post-item .category {\n' +
              '    font-size: 0.75rem;\n' +
              '    font-weight: bold;\n' +
              '    margin-bottom: 5px;\n' +
              '    text-transform: uppercase;\n' +
              '    color: #6c757d;\n' +
              '  }\n' +
              '  .blog-post-item .date {\n' +
              '    font-size: 1rem;\n' +
              '    font-weight: bold;\n' +
              '    margin-bottom: 5px;\n' +
              '    color: #6c757d;\n' +
              '  }\n' +
              '</style>\n' +
              '<div class="container" style="font-family: \'body-font\', sans-serif; background-color: #f7fafa;">\n' +
              '  <div class="blog-post">\n' +
              '    <div class="blog-post-item">\n' +
              '      <div class="blog-post-item-content">\n' +
              '        <div class="date">18 Jul</div>\n' +
              '        <h1>The 400 Blows</h1>\n' +
              '        <p>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>\n' +
              '        <a href="#">\n' +
              '          <img src="https://dummyimage.com/103x103" alt="blog">\n' +
              '          <div>\n' +
              '            <div class="category">Category</div>\n' +
              '            <div class="author">Alper Kamu</div>\n' +
              '          </div>\n' +
              '        </a>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '    <div class="blog-post-item">\n' +
              '      <div class="blog-post-item-content">\n' +
              '        <div class="date">18 Jul</div>\n' +
              '        <h1>Shooting Stars</h1>\n' +
              '        <p>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>\n' +
              '        <a href="#">\n' +
              '          <img src="https://dummyimage.com/102x102" alt="blog">\n' +
              '          <div>\n' +
              '            <div class="category">Category</div>\n' +
              '            <div class="author">Holden Caulfield</div>\n' +
              '          </div>\n' +
              '        </a>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '    <div class="blog-post-item">\n' +
              '      <div class="blog-post-item-content">\n' +
              '        <div class="date">18 Jul</div>\n' +
              '        <h1>Neptune</h1>\n' +
              '        <p>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>\n' +
              '        <a href="#">\n' +
              '          <img src="https://dummyimage.com/101x101" alt="blog">\n' +
              '          <div>\n' +
              '            <div class="category">Category</div>\n' +
              '            <div class="author">Henry Letham</div>\n' +
              '          </div>\n' +
              '        </a>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</div>\n',
            category: 'Blog',
            media: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 24 24"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M21.5625 1.4375H0.4791666666666667v21.083333333333336h21.083333333333336v-21.083333333333336Z" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 5.270833333333334h3.8333333333333335" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 15.8125h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.979166666666668 15.8125h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 17.729166666666668h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.979166666666668 17.729166666666668h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 19.645833333333336h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.979166666666668 19.645833333333336h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14.854166666666668 5.270833333333334h3.8333333333333335" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.020833333333334 3.8333333333333335 9.583333333333334 5.270833333333334 11.020833333333334 6.708333333333334 12.458333333333334 5.270833333333334 11.020833333333334 3.8333333333333335Z" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M18.6875 9.104166666666668h-15.333333333333334v3.8333333333333335h15.333333333333334v-3.8333333333333335Z" stroke-width="1"></path></svg>'
          },
          {
            id: 'contact-1',
            label: 'Contact-1',
            content: '<style>\n' +
              '  .contact-section {\n' +
              '    display: flex;\n' +
              '    justify-content: center;\n' +
              '  padding: 80px 0;\n' +
              '  background-color: #f7f7f7;\n' +
              '}\n' +
              '\n' +
              '.contact-header {\n' +
              '  margin-bottom: 50px;\n' +
              '  text-align: center;\n' +
              '}\n' +
              '\n' +
              '.contact-header h1 {\n' +
              '  font-size: 36px;\n' +
              '  font-weight: 600;\n' +
              '  margin-bottom: 20px;\n' +
              '}\n' +
              '\n' +
              '.contact-header p {\n' +
              '  font-size: 18px;\n' +
              '  line-height: 1.5;\n' +
              '  color: #666;\n' +
              '}\n' +
              '\n' +
              '.contact-form {\n' +
              '  display: flex;\n' +
              '  flex-wrap: wrap;\n' +
              '  justify-content: center;\n' +
              '  margin-bottom: 50px;\n' +
              '}\n' +
              '\n' +
              '.form-group {\n' +
              '  width: 100%;\n' +
              '  margin-bottom: 20px;\n' +
              '\n' +
              '}\n' +
              '\n' +
              '.form-group label {\n' +
              '  display: block;\n' +
              '  font-size: 16px;\n' +
              '  font-weight: 600;\n' +
              '  margin-bottom: 10px;\n' +
              '  color: #333;\n' +
              '}\n' +
              '\n' +
              '.form-group input,\n' +
              '.form-group textarea {\n' +
              '  width: 100%;\n' +
              '  padding: 10px;\n' +
              '  border: 1px solid #ccc;\n' +
              '  border-radius: 5px;\n' +
              '  font-size: 16px;\n' +
              '  line-height: 1.5;\n' +
              '  color: #333;\n' +
              '}\n' +
              '\n' +
              '.form-group textarea {\n' +
              '  height: 150px;\n' +
              '  resize: none;\n' +
              '}\n' +
              '\n' +
              'button[type="submit"] {\n' +
              '  background-color: #4a5568;\n' +
              '  color: #fff;\n' +
              '  border: none;\n' +
              '  border-radius: 5px;\n' +
              '  font-size: 18px;\n' +
              '  font-weight: 600;\n' +
              '  padding: 15px 30px;\n' +
              '  cursor: pointer;\n' +
              '  transition: all 0.3s ease-in-out;\n' +
              '}\n' +
              '\n' +
              'button[type="submit"]:hover {\n' +
              '  background-color: #2d3748;\n' +
              '}\n' +
              '\n' +
              '.contact-info {\n' +
              '  text-align: center;\n' +
              '}\n' +
              '\n' +
              '.contact-info a {\n' +
              '  display: block;\n' +
              '  font-size: 18px;\n' +
              '  font-weight: 600;\n' +
              '  margin-bottom: 10px;\n' +
              '  color: #4a5568;\n' +
              '  transition: all 0.3s ease-in-out;\n' +
              '}\n' +
              '\n' +
              '.contact-info a:hover {\n' +
              '  color: #2d3748;\n' +
              '}\n' +
              '\n' +
              '.contact-info p {\n' +
              '  font-size: 16px;\n' +
              '  line-height: 1.5;\n' +
              '  color: #666;\n' +
              '  margin-bottom: 20px;\n' +
              '}\n' +
              '\n' +
              '.social-icons {\n' +
              '  display: flex;\n' +
              '  justify-content: center;\n' +
              '  flex-direction: row;\n' +
              '}\n' +
              '\n' +
              '.social-icons a {\n' +
              '  margin-right: 10px;\n' +
              '  color: #4a5568;\n' +
              '  transition: all 0.3s ease-in-out;\n' +
              '}\n' +
              '\n' +
              '.social-icons a:hover {\n' +
              '  color: #2d3748;\n' +
              '}\n' +
              '\n' +
              '</style>\n' +
              '\n' +
              '<section class="contact-section">\n' +
              '  <div style="align-items: center">\n' +
              '    <div class="contact-header">\n' +
              '      <h1>Contact Us</h1>\n' +
              '      <p>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>\n' +
              '    </div>\n' +
              '    <form class="contact-form">\n' +
              '      <div style="display: flex; flex-direction: row;">\n' +
              '        <div class="form-group" style="margin-right: 2.5rem">\n' +
              '          <label for="name">Name</label>\n' +
              '          <input type="text" id="name" name="name" required>\n' +
              '        </div>\n' +
              '        <div class="form-group">\n' +
              '            <label for="email">Email</label>\n' +
              '            <input type="email" id="email" name="email" required>\n' +
              '        </div>\n' +
              '      </div>\n' +
              '      <div class="form-group">\n' +
              '        <label for="message">Message</label>\n' +
              '        <textarea id="message" name="message" required></textarea>\n' +
              '      </div>\n' +
              '      <button type="submit">Button</button>\n' +
              '    </form>\n' +
              '    <div class="contact-info">\n' +
              '      <a href="mailto:example@email.com">example@email.com</a>\n' +
              '      <p>49 Smith St.<br>Saint Cloud, MN 56301</p>\n' +
              '    </div>\n' +
              '    <div class="social-icons">\n' +
              '      <a>\n' +
              '        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><path fill="#000000" fill-rule="evenodd" d="M4.584 3.235C6.464 1.04 9.067 0 11.888 0c2.693 0 5.074 0.645 6.911 1.963 1.857 1.332 3.07 3.287 3.502 5.712a1.25 1.25 0 1 1 -2.461 0.438c-0.325 -1.822 -1.202 -3.19 -2.497 -4.118 -1.314 -0.942 -3.146 -1.495 -5.455 -1.495 -2.18 0 -4.056 0.786 -5.406 2.361 -1.365 1.594 -2.302 4.128 -2.302 7.81 0 3.552 1.201 5.696 2.74 6.977 1.58 1.316 3.676 1.852 5.64 1.852 3.878 0 6.255 -2.282 6.366 -4.778 0.055 -1.239 -0.462 -2.24 -1.422 -2.973a4.85 4.85 0 0 0 -0.07 -0.053c-0.193 0.878 -0.512 1.66 -0.952 2.328 -0.92 1.397 -2.32 2.213 -3.924 2.331 -1.48 0.11 -2.722 -0.246 -3.63 -0.976a3.836 3.836 0 0 1 -1.434 -2.771c-0.048 -0.823 0.09 -2.038 1.028 -3.043 0.943 -1.01 2.463 -1.561 4.635 -1.561 0.641 0 1.268 0.047 1.872 0.143 -0.213 -1.05 -0.693 -1.56 -1.109 -1.836 -0.563 -0.375 -1.21 -0.447 -1.525 -0.447 -0.884 0 -1.667 0.332 -2.403 1.176a1.25 1.25 0 0 1 -1.885 -1.642c1.172 -1.345 2.624 -2.034 4.288 -2.034 0.583 0 1.781 0.115 2.909 0.864 1.193 0.793 2.142 2.188 2.31 4.409l0.018 0.289c0.5 0.234 0.966 0.513 1.389 0.836 1.559 1.19 2.496 2.951 2.402 5.071C21.235 21.057 17.345 24 12.56 24c-2.367 0 -5.088 -0.64 -7.24 -2.43 -2.193 -1.826 -3.64 -4.721 -3.64 -8.898 0 -4.086 1.04 -7.263 2.904 -9.437Zm10.49 9.461a9.216 9.216 0 0 0 -1.917 -0.192c-1.79 0 -2.514 0.453 -2.807 0.767 -0.297 0.318 -0.386 0.743 -0.36 1.19 0.02 0.354 0.182 0.709 0.507 0.97 0.32 0.259 0.899 0.503 1.877 0.431 0.82 -0.06 1.52 -0.455 2.02 -1.213 0.312 -0.474 0.562 -1.12 0.68 -1.953Z" clip-rule="evenodd" stroke-width="1"></path></svg>\n' +
              '      </a>\n' +
              '      <a>\n' +
              '        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><path fill="#000000" fill-rule="evenodd" d="M23 1H1v22h12v-8h-2.5v-3H13V8.5A3.5 3.5 0 0 1 16.5 5H19v3h-1.5A1.5 1.5 0 0 0 16 9.5V12h2.86l-0.75 3H16v8h7V1Z" clip-rule="evenodd" stroke-width="1"></path></svg>\n' +
              '      </a>\n' +
              '      <a>\n' +
              '        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><path fill="#000000" d="m5 6 0 -0.5 -4 0L1 6c0 2.986 1.06 6.338 2.946 8.952C5.834 17.57 8.595 19.5 12 19.5h2v-4.782a9.475 9.475 0 0 1 3.004 1.367c1.168 0.815 1.962 1.831 1.996 2.93l0.015 0.485H23V19c0 -1.549 -0.721 -3.01 -1.7 -4.221a11.844 11.844 0 0 0 -2.752 -2.457C20.536 10.852 22 8.622 22 6v-0.5h-4V6c0 1.127 -0.575 2.079 -1.46 2.829 -0.727 0.614 -1.64 1.072 -2.54 1.35V5.5h-4v9.572c-1.439 -0.636 -2.624 -1.91 -3.488 -3.468C5.526 9.824 5 7.739 5 6Z" stroke-width="1"></path></svg>\n' +
              '      </a>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</section>\n',
            category: 'Contact',
            media: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 24 24"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M21.5625 1.4375H0.4791666666666667v21.083333333333336h21.083333333333336v-21.083333333333336Z" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 5.270833333333334h3.8333333333333335" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 15.8125h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.979166666666668 15.8125h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 17.729166666666668h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.979166666666668 17.729166666666668h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3.354166666666667 19.645833333333336h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.979166666666668 19.645833333333336h6.708333333333334" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14.854166666666668 5.270833333333334h3.8333333333333335" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.020833333333334 3.8333333333333335 9.583333333333334 5.270833333333334 11.020833333333334 6.708333333333334 12.458333333333334 5.270833333333334 11.020833333333334 3.8333333333333335Z" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M18.6875 9.104166666666668h-15.333333333333334v3.8333333333333335h15.333333333333334v-3.8333333333333335Z" stroke-width="1"></path></svg>'
          },
          {
            id: 'content-1',
            label: 'Content-1',
            content: '  <style>\n' +
              '    * {\n' +
              '      margin: 0;\n' +
              '      padding: 0;\n' +
              '      box-sizing: border-box;\n' +
              '    }\n' +
              '    body {\n' +
              '      font-family: Arial, sans-serif;\n' +
              '      line-height: 1.6;\n' +
              '      background-color: #f7f7f7;\n' +
              '      color: #333;\n' +
              '    }\n' +
              '    .container {\n' +
              '      max-width: 1200px;\n' +
              '      margin: 0 auto;\n' +
              '      padding: 0 20px;\n' +
              '    }\n' +
              '    .section {\n' +
              '      text-align: center;\n' +
              '      padding: 40px 0;\n' +
              '    }\n' +
              '    .card {\n' +
              '      background-color: #fff;\n' +
              '      border-right: 2px solid #d1d1d1;\n' +
              '      padding: 20px;\n' +
              '      margin: 10px;\n' +
              '    }\n' +
              '    .card h2 {\n' +
              '      font-size: 1.5rem;\n' +
              '      margin-bottom: 10px;\n' +
              '    }\n' +
              '    .card p {\n' +
              '      font-size: 1.2rem;\n' +
              '      margin-bottom: 20px;\n' +
              '    }\n' +
              '    .btn {\n' +
              '      display: inline-flex;\n' +
              '      margin-top: 20px;\n' +
              '      padding: 10px 20px;\n' +
              '      background-color: #4f46e5;\n' +
              '      color: #fff;\n' +
              '      text-decoration: none;\n' +
              '      border: none;\n' +
              '      border-radius: 5px;\n' +
              '    }\n' +
              '    .btn:hover {\n' +
              '      background-color: #635ad1;\n' +
              '    }\n' +
              '  </style>\n' +
              '\n' +
              '    <div class="container" style="margin-top: 5rem">\n' +
              '    <div class="section">\n' +
              '      <h2>ROOF PARTY POLAROID</h2>\n' +
              '      <h1>Master Cleanse Reliac Heirloom</h1>\n' +
              '      <p>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven\'t heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>\n' +
              '    </div>\n' +
              '    <div style="display: flex; flex-direction: row">\n' +
              '      <div class="card">\n' +
              '        <h2>Shooting Stars</h2>\n' +
              '        <p>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>\n' +
              '        <a href="#" class="btn">Learn More</a>\n' +
              '      </div>\n' +
              '      <div class="card">\n' +
              '        <h2>The Catalyzer</h2>\n' +
              '        <p>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche..</p>\n' +
              '        <a href="#" class="btn">Learn More</a>\n' +
              '      </div>\n' +
              '      <div class="card">\n' +
              '        <h2>Neptune</h2>\n' +
              '        <p>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>\n' +
              '        <a href="#" class="btn">Learn More</a>\n' +
              '      </div>\n' +
              '      <div class="card" style="border: none">\n' +
              '        <h2>Melanchole</h2>\n' +
              '        <p>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>\n' +
              '        <a href="#" class="btn">Learn More</a>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '      <div style="display: flex; justify-content: center">\n' +
              '    <button class="btn">Button</button>\n' +
              '    </div>\n' +
              '  </div>\n',
            category: 'Content',
            media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><g><path d="M8 0H3a3 3 0 0 0 -3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3 -3V3a3 3 0 0 0 -3 -3Zm1 8a1 1 0 0 1 -1 1H3a1 1 0 0 1 -1 -1V3a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1Z" fill="#000000" stroke-width="1"></path><path d="M8 13H3a3 3 0 0 0 -3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3 -3v-5a3 3 0 0 0 -3 -3Zm1 8a1 1 0 0 1 -1 1H3a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1Z" fill="#000000" stroke-width="1"></path><path d="M14.25 3h9a0.75 0.75 0 0 0 0 -1.5h-9a0.75 0.75 0 0 0 0 1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 4.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 7.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 14.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 17.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 20.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path></g></svg>'
          },
          {
            id: 'content-2',
            label: 'Content-2',
            content: '<style>\n' +
              '  * {\n' +
              '    margin: 0;\n' +
              '    padding: 0;\n' +
              '    box-sizing: border-box;\n' +
              '  }\n' +
              '  body {\n' +
              '    font-family: Arial, sans-serif;\n' +
              '    line-height: 1.6;\n' +
              '    background-color: #f7f7f7;\n' +
              '    color: #333;\n' +
              '  }\n' +
              '  .section {\n' +
              '    max-width: 1200px;\n' +
              '    margin: 5rem auto;\n' +
              '    padding: 0 20px;\n' +
              '  }\n' +
              '  .header-card {\n' +
              '    display: flex;\n' +
              '    flex-direction: row;\n' +
              '    background-color: #fff;\n' +
              '    border-bottom: 5px solid #4f46e5;\n' +
              '    margin: 3rem;\n' +
              '  }\n' +
              '  .card {\n' +
              '    background-color: #fff;\n' +
              '    padding: 20px;\n' +
              '    margin: 10px;\n' +
              '  }\n' +
              '  .card h1 {\n' +
              '    font-size: 1.5rem;\n' +
              '    margin-bottom: 10px;\n' +
              '  }\n' +
              '  .card p {\n' +
              '    font-size: 1.2rem;\n' +
              '    margin-bottom: 20px;\n' +
              '  }\n' +
              '  .card img {\n' +
              '    height: 40px;\n' +
              '    width: 40px;\n' +
              '    object-fit: cover;\n' +
              '    object-position: center;\n' +
              '    border-radius: 5px;\n' +
              '  }\n' +
              '  .card h2 {\n' +
              '    font-size: 0.8rem;\n' +
              '    font-weight: bold;\n' +
              '    margin-bottom: 5px;\n' +
              '  }\n' +
              '</style>\n' +
              '<div class="section">\n' +
              '  <div style="display: flex; flex-direction: row">\n' +
              '    <div style="width: 1180px;">\n' +
              '      <h2 class="header-card">Pitchfork Kickstarter Taxidermy</h2>\n' +
              '    </div>\n' +
              '    <div style="margin-left: 3rem; display: flex; justify-content: center; align-items: center">\n' +
              '      <p style="">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven\'t heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '  <div style="display: flex; flex-direction: row">\n' +
              '    <div class="card">\n' +
              '      <img src="https://dummyimage.com/720x400" alt="blog" style="object-fit: cover; width: 100%; height: auto">\n' +
              '      <h3>SUBTITLE</h3>\n' +
              '      <h2>Chichen Itza</h2>\n' +
              '      <p>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>\n' +
              '    </div>\n' +
              '    <div class="card">\n' +
              '      <img src="https://dummyimage.com/720x400" alt="blog" style="object-fit: cover; width: 100%; height: auto">\n' +
              '      <h3>SUBTITLE</h3>\n' +
              '      <h2>Chichen Itza</h2>\n' +
              '      <p>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>\n' +
              '    </div>\n' +
              '    <div class="card">\n' +
              '      <img src="https://dummyimage.com/720x400" alt="blog" style="object-fit: cover; width: 100%; height: auto">\n' +
              '      <h3>SUBTITLE</h3>\n' +
              '      <h2>Chichen Itza</h2>\n' +
              '      <p>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>\n' +
              '    </div>\n' +
              '    <div class="card">\n' +
              '      <img src="https://dummyimage.com/720x400" alt="blog" style="object-fit: cover; width: 100%; height: auto">\n' +
              '      <h3>SUBTITLE</h3>\n' +
              '      <h2>Chichen Itza</h2>\n' +
              '      <p>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</div>\n',
            category: 'Content',
            media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><g><path d="M8 0H3a3 3 0 0 0 -3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3 -3V3a3 3 0 0 0 -3 -3Zm1 8a1 1 0 0 1 -1 1H3a1 1 0 0 1 -1 -1V3a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1Z" fill="#000000" stroke-width="1"></path><path d="M8 13H3a3 3 0 0 0 -3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3 -3v-5a3 3 0 0 0 -3 -3Zm1 8a1 1 0 0 1 -1 1H3a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1Z" fill="#000000" stroke-width="1"></path><path d="M14.25 3h9a0.75 0.75 0 0 0 0 -1.5h-9a0.75 0.75 0 0 0 0 1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 4.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 7.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 14.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 17.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 20.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path></g></svg>'
          },
          {
            id: 'content-3',
            label: 'Content-3',
            content: '<style>\n' +
              '  .container {\n' +
              '    margin-top: 5rem;\n' +
              '    display: flex;\n' +
              '    justify-content: center;\n' +
              '    flex-wrap: wrap;\n' +
              '    gap: 16px;\n' +
              '  }\n' +
              '  .card {\n' +
              '    flex: 1 0 calc(33.333% - 24px);\n' +
              '    padding: 20px;\n' +
              '  }\n' +
              '  .img-view {\n' +
              '    width: 30px;\n' +
              '    height: 30px;\n' +
              '    background: #E0E7FF;\n' +
              '    border: 2px solid transparent;\n' +
              '    border-radius: 2rem;\n' +
              '    display: flex;\n' +
              '    justify-content: center;\n' +
              '    align-items: center;\n' +
              '  }\n' +
              '</style>\n' +
              '<section>\n' +
              '  <div class="container">\n' +
              '    <div style="display: flex; flex-direction: column; align-items: center;  justify-content: center">\n' +
              '      <h1><b>Pitchfork Kickstarter Taxidermy</b></h1>\n' +
              '      <h4 style="color: grey">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</h4>\n' +
              '    </div>\n' +
              '    <div style="display: flex; flex-direction: column">\n' +
              '      <div style="display: flex; flex-direction: row">\n' +
              '        <div class="card">\n' +
              '          <div class="img-view">\n' +
              '            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.855 -0.855 24 24" height="24" width="24"><g id="wave-signal--heart-line-beat-square-graph-stats"><path id="Vector" stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M0.7960714285714285 11.272371428571429h3.486792857142857a0.8279142857142857 0.8279142857142857 0 0 0 0.7164642857142857 -0.42987857142857144l2.8658571428571427 -5.731714285714285a0.78015 0.78015 0 0 1 0.78015 -0.42987857142857144 0.7642285714285714 0.7642285714285714 0 0 1 0.6846214285714285 0.5572499999999999l3.550478571428571 11.813699999999999a0.7960714285714285 0.7960714285714285 0 0 0 0.7323857142857143 0.5731714285714286 0.7960714285714285 0.7960714285714285 0 0 0 0.7164642857142857 -0.5094857142857143l2.181235714285714 -5.333678571428571a0.8119928571428571 0.8119928571428571 0 0 1 0.7483071428571428 -0.5094857142857143h4.2351" stroke-width="1.71"></path></g></svg>\n' +
              '          </div>\n' +
              '          <h3>Shooting Stars</h3>\n' +
              '          <p>Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>\n' +
              '        </div>\n' +
              '        <div class="card">\n' +
              '          <div class="img-view">\n' +
              '            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.855 -0.855 24 24" height="24" width="24"><g id="triangle-flag--navigation-map-maps-flag-gps-location-destination-goal"><path id="Vector" stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M3.9803571428571427 0.7960714285714285v20.697857142857142" stroke-width="1.71"></path><path id="Vector_2" fill="#d7e0ff" d="m3.9803571428571427 0.7960714285714285 14.329285714285714 7.164642857142857 -14.329285714285714 7.164642857142857" stroke-width="1.71"></path><path id="Vector_3" stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="m3.9803571428571427 0.7960714285714285 14.329285714285714 7.164642857142857 -14.329285714285714 7.164642857142857" stroke-width="1.71"></path></g></svg>\n' +
              '          </div>\n' +
              '          <h3>Melancholy</h3>\n' +
              '          <p>Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>\n' +
              '        </div>\n' +
              '        <div class="card">\n' +
              '          <div class="img-view">\n' +
              '            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.855 -0.855 24 24" height="24" width="24"><g id="shield-2--shield-protection-security-defend-crime-war-cover"><path id="Vector" fill="#d7e0ff" d="m12.609771428571428 21.032207142857143 -0.9393642857142857 0.36619285714285715a1.4966142857142857 1.4966142857142857 0 0 1 -1.0508142857142857 0l-0.9393642857142857 -0.36619285714285715A12.737142857142857 12.737142857142857 0 0 1 1.592142857142857 9.202585714285714V4.776428571428571A10.126028571428572 10.126028571428572 0 0 0 11.145 0.7960714285714285c1.9901785714285714 2.8977 5.285914285714285 4.266942857142857 9.552857142857142 3.9803571428571427v4.426157142857142a12.737142857142857 12.737142857142857 0 0 1 -8.088085714285715 11.829621428571429Z" stroke-width="1.71"></path><path id="Vector_2" stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="m12.609771428571428 21.032207142857143 -0.9393642857142857 0.36619285714285715a1.4966142857142857 1.4966142857142857 0 0 1 -1.0508142857142857 0l-0.9393642857142857 -0.36619285714285715A12.737142857142857 12.737142857142857 0 0 1 1.592142857142857 9.202585714285714V4.776428571428571A10.126028571428572 10.126028571428572 0 0 0 11.145 0.7960714285714285c1.9901785714285714 2.8977 5.285914285714285 4.266942857142857 9.552857142857142 3.9803571428571427v4.426157142857142a12.737142857142857 12.737142857142857 0 0 1 -8.088085714285715 11.829621428571429v0Z" stroke-width="1.71"></path></g></svg></div>\n' +
              '          <h3>Ramon Falls</h3>\n' +
              '          <p>Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>\n' +
              '        </div>\n' +
              '      </div>\n' +
              '      <div style="display: flex; flex-direction: row">\n' +
              '        <div class="card">\n' +
              '          <div class="img-view">\n' +
              '            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.855 -0.855 24 24" height="24" width="24"><g id="user-circle-single--circle-geometric-human-person-single-user"><path id="Vector" fill="#ffffff" d="M11.145 12.737142857142857a3.9803571428571427 3.9803571428571427 0 1 0 0 -7.960714285714285 3.9803571428571427 3.9803571428571427 0 0 0 0 7.960714285714285Z" stroke-width="1.71"></path><path id="Intersect" fill="#ffffff" d="M17.945042142857144 18.9465A10.309125 10.309125 0 0 1 11.145 21.49392857142857a10.309125 10.309125 0 0 1 -6.8000421428571425 -2.5474285714285716A7.955937857142857 7.955937857142857 0 0 1 11.145 15.125357142857142c2.8801864285714283 0 5.402140714285713 1.5284571428571427 6.8000421428571425 3.8211428571428567Z" stroke-width="1.71"></path><path id="Subtract" fill="#d7e0ff" fill-rule="evenodd" d="M4.344957857142857 18.9465A7.955937857142857 7.955937857142857 0 0 1 11.145 15.125357142857142c2.8801864285714283 0 5.402140714285713 1.5284571428571427 6.8000421428571425 3.8211428571428567a10.348928571428571 10.348928571428571 0 1 0 -13.601676428571427 0ZM11.145 12.737142857142857a3.9803571428571427 3.9803571428571427 0 1 0 0 -7.960714285714285 3.9803571428571427 3.9803571428571427 0 0 0 0 7.960714285714285Z" clip-rule="evenodd" stroke-width="1.71"></path><path id="Vector_2" stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M11.145 12.737142857142857a3.9803571428571427 3.9803571428571427 0 1 0 0 -7.960714285714285 3.9803571428571427 3.9803571428571427 0 0 0 0 7.960714285714285Z" stroke-width="1.71"></path><path id="Vector_3" stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M4.34655 18.9465a7.960714285714285 7.960714285714285 0 0 1 13.596899999999998 0" stroke-width="1.71"></path><path id="Vector_4" stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M11.145 21.49392857142857a10.348928571428571 10.348928571428571 0 1 0 0 -20.697857142857142 10.348928571428571 10.348928571428571 0 0 0 0 20.697857142857142Z" stroke-width="1.71"></path></g></svg>\n' +
              '          </div>\n' +
              '          <h3>Neptune</h3>\n' +
              '          <p>Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>\n' +
              '        </div>\n' +
              '        <div class="card">\n' +
              '          <div class="img-view">\n' +
              '            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.855 -0.855 24 24" height="24" width="24"><g id="waning-cresent-moon--night-new-moon-crescent-weather-time-waning"><path id="Vector" fill="#d7e0ff" d="M12.737142857142857 11.145a11.145 11.145 0 0 1 5.476971428571428 -9.552857142857142A10.4763 10.4763 0 0 0 14.329285714285714 0.7960714285714285a10.348928571428571 10.348928571428571 0 1 0 0 20.697857142857142 10.477892142857144 10.477892142857144 0 0 0 3.9325928571428572 -0.7960714285714285A11.145 11.145 0 0 1 12.737142857142857 11.145Z" stroke-width="1.71"></path><path id="Vector_2" stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M12.737142857142857 11.145a11.145 11.145 0 0 1 5.476971428571428 -9.552857142857142A10.4763 10.4763 0 0 0 14.329285714285714 0.7960714285714285a10.348928571428571 10.348928571428571 0 1 0 0 20.697857142857142 10.477892142857144 10.477892142857144 0 0 0 3.9325928571428572 -0.7960714285714285A11.145 11.145 0 0 1 12.737142857142857 11.145v0Z" stroke-width="1.71"></path></g></svg>\n' +
              '          </div>\n' +
              '          <h3>Bunker</h3>\n' +
              '          <p>Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>\n' +
              '        </div>\n' +
              '        <div class="card">\n' +
              '          <div class="img-view">\n' +
              '            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.855 -0.855 24 24" height="24" width="24"><g id="cut--coupon-cut-discount-price-prices-scissors"><path id="Vector" stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M11.92515 16.7175h3.184285714285714" stroke-width="1.71"></path><path id="Vector_2" stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M18.293721428571427 16.7175h3.184285714285714" stroke-width="1.71"></path><path id="Vector_3" stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="m3.486792857142857 7.849264285714285 9.234428571428571 5.301835714285714" stroke-width="1.71"></path><path id="Vector_4" stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M4.378392857142857 7.960714285714285a3.5823214285714284 3.5823214285714284 0 1 0 0 -7.164642857142857 3.5823214285714284 3.5823214285714284 0 0 0 0 7.164642857142857Z" stroke-width="1.71"></path><path id="Vector_5" stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M3.486792857142857 14.440735714285713 21.49392857142857 4.059964285714285" stroke-width="1.71"></path><path id="Vector_6" stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M4.378392857142857 21.49392857142857a3.5823214285714284 3.5823214285714284 0 1 0 0 -7.164642857142857 3.5823214285714284 3.5823214285714284 0 0 0 0 7.164642857142857Z" stroke-width="1.71"></path></g></svg>\n' +
              '          </div>\n' +
              '          <h3>The Catalyzer</h3>\n' +
              '          <p>Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>\n' +
              '        </div>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</section>\n',
            category: 'Content',
            media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><g><path d="M8 0H3a3 3 0 0 0 -3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3 -3V3a3 3 0 0 0 -3 -3Zm1 8a1 1 0 0 1 -1 1H3a1 1 0 0 1 -1 -1V3a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1Z" fill="#000000" stroke-width="1"></path><path d="M8 13H3a3 3 0 0 0 -3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3 -3v-5a3 3 0 0 0 -3 -3Zm1 8a1 1 0 0 1 -1 1H3a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1Z" fill="#000000" stroke-width="1"></path><path d="M14.25 3h9a0.75 0.75 0 0 0 0 -1.5h-9a0.75 0.75 0 0 0 0 1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 4.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 7.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 14.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 17.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 20.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path></g></svg>'
          },
          {
            id: "content-4",
            label: 'Content-4',
            content: '<style>\n' +
              '  .container {\n' +
              '    margin-top: 5rem;\n' +
              '    display: flex;\n' +
              '    justify-content: center;\n' +
              '    flex-wrap: wrap;\n' +
              '    gap: 16px;\n' +
              '  }\n' +
              '  .btn {\n' +
              '    display: inline-flex;\n' +
              '    text-decoration: none;\n' +
              '    border: none;\n' +
              '    border-radius: 5px;\n' +
              '    font-family: "Segoe UI Semibold";\n' +
              '    color: #6663F1\n' +
              '  }\n' +
              '  .border-right {\n' +
              '    border-right: 2px solid #d1d1d1;\n' +
              '    padding: 3rem;\n' +
              '  }\n' +
              '  .text-style {\n' +
              '    opacity: 1;\n' +
              '    color: rgba(75, 85, 99)\n' +
              '  }\n' +
              '</style>\n' +
              '<section>\n' +
              '  <div class="container">\n' +
              '    <div style="display: flex; flex-direction: row">\n' +
              '      <div style="display: flex; flex-direction: column; max-width: 500px;" class="border-right">\n' +
              '        <h1>Pitchfork Kickstarter Taxidermy</h1>\n' +
              '        <h3 style="color: #535353">Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.</h3>\n' +
              '        <a href="#" class="btn">\n' +
              '          Learn More\n' +
              '          <svg style="margin-left: 0.5rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.57 -0.57 16 16" height="16" width="16"><g id="next--next-arrow-right-keyboard"><path id="Vector" stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M0.5307142857142857 7.43h10.614285714285714" stroke-width="1.14"></path><path id="Vector_2" stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M7.43 11.145 11.145 7.43 7.43 3.715" stroke-width="1.14"></path><path id="Vector_3" stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M14.329285714285714 3.715v7.43" stroke-width="1.14"></path></g></svg>\n' +
              '        </a>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '    <div style="display: flex; justify-content: center; flex-direction: column; padding: 3rem">\n' +
              '      <div>\n' +
              '        <h4 style="font-family: \'Segoe UI Semibold\'; line-height: 1.25rem; font-size: 0.875rem; font-weight: 600">CATEGORIES</h4>\n' +
              '      </div>\n' +
              '      <div style="display: flex; flex-direction: row">\n' +
              '        <div style="display: flex; flex-direction: column; margin-right: 3rem">\n' +
              '          <div>\n' +
              '            <p class="text-style">First Link</p>\n' +
              '            <p class="text-style">Fourth Link</p>\n' +
              '            <p class="text-style">Seventh Link</p>\n' +
              '          </div>\n' +
              '        </div>\n' +
              '        <div style="display: flex; flex-direction: column; margin-right: 3rem">\n' +
              '          <div>\n' +
              '            <p class="text-style">Second Link</p>\n' +
              '            <p class="text-style">Fifth Link</p>\n' +
              '            <p class="text-style">Eighth Link</p>\n' +
              '          </div>\n' +
              '        </div>\n' +
              '        <div style="display: flex; flex-direction: column">\n' +
              '          <div>\n' +
              '            <p class="text-style">Third Link</p>\n' +
              '            <p class="text-style">Sixth Link</p>\n' +
              '          </div>\n' +
              '        </div>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</section>\n',
            category: 'Content',
            media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><g><path d="M8 0H3a3 3 0 0 0 -3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3 -3V3a3 3 0 0 0 -3 -3Zm1 8a1 1 0 0 1 -1 1H3a1 1 0 0 1 -1 -1V3a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1Z" fill="#000000" stroke-width="1"></path><path d="M8 13H3a3 3 0 0 0 -3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3 -3v-5a3 3 0 0 0 -3 -3Zm1 8a1 1 0 0 1 -1 1H3a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1Z" fill="#000000" stroke-width="1"></path><path d="M14.25 3h9a0.75 0.75 0 0 0 0 -1.5h-9a0.75 0.75 0 0 0 0 1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 4.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 7.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 14.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 17.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path><path d="M23.25 20.5h-9a0.75 0.75 0 0 0 0 1.5h9a0.75 0.75 0 0 0 0 -1.5Z" fill="#000000" stroke-width="1"></path></g></svg>'
          },
          {
            id: "cta-1",
            label: "CTA-1",
            content: '<style>\n' +
              '.container {\n' +
              '  max-width: 1140px;\n' +
              '  margin-right: auto;\n' +
              '  margin-left: auto;\n' +
              '  padding-right: 15px;\n' +
              '  padding-left: 15px;\n' +
              '  margin-top: 5rem;\n' +
              '  display: flex;\n' +
              '  flex-direction: row;\n' +
              '  justify-content: center;\n' +
              '}\n' +
              '.content {\n' +
              '  display: flex;\n' +
              '  flex-direction: row;\n' +
              '  align-items: center;\n' +
              '}\n' +
              '.text-gray-900 {\n' +
              '  color: #374151;\n' +
              '}\n' +
              '.text-white {\n' +
              '  color: #fff;\n' +
              '}\n' +
              '.text-2xl {\n' +
              '  font-size: 1.5rem;\n' +
              '  line-height: 2rem;\n' +
              '}\n' +
              '.font-medium {\n' +
              '  font-weight: 500;\n' +
              '}\n' +
              '.title-font {\n' +
              '  font-family: \'Poppins\', sans-serif;\n' +
              '}\n' +
              '.bg-indigo-500 {\n' +
              '  background-color: #805ad5;\n' +
              '}\n' +
              '.border-0 {\n' +
              '  border: 0;\n' +
              '}\n' +
              '.py-2 {\n' +
              '  padding-top: 0.5rem;\n' +
              '  padding-bottom: 0.5rem;\n' +
              '}\n' +
              '.px-8 {\n' +
              '  padding-left: 2rem;\n' +
              '  padding-right: 2rem;\n' +
              '}\n' +
              '.rounded {\n' +
              '  border-radius: 0.375rem;\n' +
              '}\n' +
              '.text-lg {\n' +
              '  font-size: 1.125rem;\n' +
              '  line-height: 1.75rem;\n' +
              '}\n' +
              '.mt-10 {\n' +
              '  margin-top: 2.5rem;\n' +
              '}\n' +
              '.sm-pr-16 {\n' +
              '  padding-right: 4rem;\n' +
              '}\n' +
              '.sm-mt-0 {\n' +
              '  margin-top: 0;\n' +
              '}\n' +
              '.focus-outline-none:focus {\n' +
              '  outline: 2px solid transparent;\n' +
              '  outline-offset: 2px;\n' +
              '}\n' +
              '.hover-bg-indigo-600:hover {\n' +
              '  background-color: #6b46c1;\n' +
              '}\n' +
              '</style>\n' +
              '<section>\n' +
              '  <div class="container">\n' +
              '    <div class="content">\n' +
              '      <h1 class="flex-grow sm-pr-16 text-2xl font-medium title-font text-gray-900" style="width: 600px">Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage.</h1>\n' +
              '      <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus-outline-none hover-bg-indigo-600 rounded text-lg mt-10 sm-mt-0">Button</button>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</section>\n',
            category: 'CTA',
            media: '<svg viewBox="-0.25 -0.25 24 24" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M14.6875 12.212166666666667a6.364583333333333 6.364583333333333 0 1 0 -6.854166666666666 0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path><path d="m8.965250000000001 23.010416666666664 -3.7276874999999996 -4.483604166666666A1.46875 1.46875 0 0 1 7.496499999999999 16.645833333333332L9.791666666666666 19.412958333333332V9.791666666666666a1.46875 1.46875 0 0 1 2.9375 0v6.364583333333333h2.9375a3.9166666666666665 3.9166666666666665 0 0 1 3.9166666666666665 3.9166666666666665v2.9375" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path></svg>'
          },
          {
            id: 'ecommerce-1',
            label: 'Ecommerce-1',
            content: '<style>\n' +
              '.container {\n' +
              '  display: flex;\n' +
              '  flex-direction: row;\n' +
              '  justify-content: center;\n' +
              '  align-items: center;\n' +
              '  margin-top: 5rem;\n' +
              '}\n' +
              '.flex-container {\n' +
              '  flex: 1 0 15%;\n' +
              '  display: flex;\n' +
              '  flex-direction: column;\n' +
              '  align-items: center\n' +
              '}\n' +
              '.category-text {\n' +
              '  color: #6B7280;\n' +
              '  font-size: 1rem;\n' +
              '  line-height: 0.5rem;\n' +
              '  letter-spacing: 0.05rem;\n' +
              '  font-family: "Segoe UI";\n' +
              '}\n' +
              '.item-text {\n' +
              '  font-family: "Times New Roman";\n' +
              '  font-size: 1.25rem;\n' +
              '  line-height: 0.5rem;\n' +
              '  letter-spacing: 0.05rem;\n' +
              '  -webkit-font-smoothing: antialiased;\n' +
              '}\n' +
              '.cost-text {\n' +
              '  opacity: 1;\n' +
              '  line-height: 0.75rem;\n' +
              '  color: #4B5563;\n' +
              '}\n' +
              '</style>\n' +
              '<div style="width: 100%; margin-top: 5rem;">\n' +
              '  <div style="display: flex; flex-direction: column; justify-content: center;">\n' +
              '    <div class="container">\n' +
              '      <div class="flex-container">\n' +
              '        <div style="display: flex; flex-direction: column">\n' +
              '          <a>\n' +
              '            <img src="https://dummyimage.com/260x130" alt="blog" style="object-fit: cover;">\n' +
              '          </a>\n' +
              '          <div style="text-align: start">\n' +
              '            <p class="category-text">CATEGORY</p>\n' +
              '            <p class="item-text"><b>The Catalyzer</b></p>\n' +
              '            <p class="cost-text">$16.00</p>\n' +
              '          </div>\n' +
              '        </div>\n' +
              '      </div>\n' +
              '      <div class="flex-container">\n' +
              '        <div style="display: flex; flex-direction: column">\n' +
              '          <a>\n' +
              '            <img src="https://dummyimage.com/260x130" alt="blog" style="object-fit: cover;">\n' +
              '          </a>\n' +
              '          <div style="text-align: start">\n' +
              '            <p class="category-text">CATEGORY</p>\n' +
              '            <p class="item-text"><b>Shooting Stars</b></p>\n' +
              '            <p class="cost-text">$21.15</p>\n' +
              '          </div>\n' +
              '        </div>\n' +
              '      </div>\n' +
              '      <div class="flex-container">\n' +
              '        <div style="display: flex; flex-direction: column">\n' +
              '          <a>\n' +
              '            <img src="https://dummyimage.com/260x130" alt="blog" style="object-fit: cover;">\n' +
              '          </a>\n' +
              '          <div style="text-align: start">\n' +
              '            <p class="category-text">CATEGORY</p>\n' +
              '            <p class="item-text"><b>Neptune</b></p>\n' +
              '            <p class="cost-text">$12.00</p>\n' +
              '          </div>\n' +
              '        </div>\n' +
              '      </div>\n' +
              '      <div class="flex-container">\n' +
              '        <div style="display: flex; flex-direction: column">\n' +
              '          <a>\n' +
              '            <img src="https://dummyimage.com/260x130" alt="blog" style="object-fit: cover;">\n' +
              '          </a>\n' +
              '          <div style="text-align: start">\n' +
              '            <p class="category-text">CATEGORY</p>\n' +
              '            <p class="item-text"><b>The 400 Blows</b></p>\n' +
              '            <p class="cost-text">$18.40</p>\n' +
              '          </div>\n' +
              '        </div>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '    <div class="container">\n' +
              '      <div class="flex-container">\n' +
              '        <div style="display: flex; flex-direction: column">\n' +
              '          <a>\n' +
              '            <img src="https://dummyimage.com/260x130" alt="blog" style="object-fit: cover;">\n' +
              '          </a>\n' +
              '          <div style="text-align: start">\n' +
              '            <p class="category-text">CATEGORY</p>\n' +
              '            <p class="item-text"><b>The 400 Blows</b></p>\n' +
              '            <p class="cost-text">$18.40</p>\n' +
              '          </div>\n' +
              '        </div>\n' +
              '      </div>\n' +
              '      <div class="flex-container">\n' +
              '        <div style="display: flex; flex-direction: column">\n' +
              '          <a>\n' +
              '            <img src="https://dummyimage.com/260x130" alt="blog" style="object-fit: cover;">\n' +
              '            <div style="text-align: start">\n' +
              '              <p class="category-text">CATEGORY</p>\n' +
              '              <p class="item-text"><b>The 400 Blows</b></p>\n' +
              '              <p class="cost-text">$18.40</p>\n' +
              '            </div>\n' +
              '          </a>\n' +
              '        </div>\n' +
              '      </div>\n' +
              '      <div class="flex-container">\n' +
              '        <div style="display: flex; flex-direction: column">\n' +
              '          <a>\n' +
              '            <img src="https://dummyimage.com/260x130" alt="blog" style="object-fit: cover;">\n' +
              '            <div style="text-align: start">\n' +
              '              <p class="category-text">CATEGORY</p>\n' +
              '              <p class="item-text"><b>The 400 Blows</b></p>\n' +
              '              <p class="cost-text">$18.40</p>\n' +
              '            </div>\n' +
              '          </a>\n' +
              '        </div>\n' +
              '      </div>\n' +
              '      <div class="flex-container">\n' +
              '        <div style="display: flex; flex-direction: column">\n' +
              '          <a>\n' +
              '            <img src="https://dummyimage.com/260x130" alt="blog" style="object-fit: cover;">\n' +
              '            <div style="text-align: start">\n' +
              '              <p class="category-text">CATEGORY</p>\n' +
              '              <p class="item-text"><b>The 400 Blows</b></p>\n' +
              '              <p class="cost-text">$18.40</p>\n' +
              '            </div>\n' +
              '          </a>\n' +
              '        </div>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</div>\n',
            category: 'Ecommerce',
            media: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.855 -0.855 24 24" height="24" width="24"><g id="layers-1--design-layer-layers-pile-stack-align"><path id="Vector" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M11.893354907142857 10.985722028571429c-0.23616254999999997 0.10254992142857142 -0.4908576428571429 0.15545682857142856 -0.7483071428571428 0.15545682857142856 -0.25746542142857143 0 -0.5121605142857143 -0.052906907142857146 -0.7483071428571428 -0.15545682857142856l-9.075220654285713 -4.203257142857143c-0.14736555857142858 -0.07432122857142857 -0.27120879857142854 -0.18809575714285712 -0.35773539428571427 -0.32865012857142856 -0.08652659571428571 -0.1405543714285714 -0.13234050642857142 -0.30236385 -0.13234050642857142 -0.4674213 0 -0.16505745 0.04581391071428571 -0.32686692857142857 0.13234050642857142 -0.4674213 0.08652659571428571 -0.14053845 0.2103698357142857 -0.2543129785714286 0.35773539428571427 -0.32865012857142856L10.39674062142857 0.9552236207142856c0.23614662857142857 -0.102545145 0.4908417214285714 -0.15546001285714287 0.7483071428571428 -0.15546001285714287 0.2574495 0 0.5121445928571429 0.052914867857142854 0.7483071428571428 0.15546001285714287L20.968521428571428 5.158479171428572c0.14743242857142858 0.07433715 0.27130114285714285 0.18811167857142858 0.35775450000000003 0.32865012857142856 0.08661257142857141 0.1405543714285714 0.13230707142857143 0.30236385 0.13230707142857143 0.4674213 0 0.16505745 -0.0456945 0.32686692857142857 -0.13230707142857143 0.4674213 -0.08645335714285714 0.1405543714285714 -0.2103220714285714 0.25432889999999997 -0.35775450000000003 0.32865012857142856l-9.075166521428573 4.2351Z" stroke-width="1.71"></path><path id="Vector_2" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M21.49392857142857 11.702218157142857 11.781857142857143 16.17617142857143c-0.20742437142857142 0.09457328571428571 -0.43276034999999996 0.14361128571428572 -0.6607392857142856 0.14361128571428572 -0.22797893571428574 0 -0.45331491428571424 -0.049038 -0.6607392857142856 -0.14361128571428572L0.7960714285714285 11.702218157142857" stroke-width="1.71"></path><path id="Vector_3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m21.49392857142857 16.876714285714286 -9.712071428571427 4.473921428571429c-0.20742437142857142 0.09457328571428571 -0.43276034999999996 0.14361128571428572 -0.6607392857142856 0.14361128571428572 -0.22797893571428574 0 -0.45331491428571424 -0.049038 -0.6607392857142856 -0.14361128571428572L0.7960714285714285 16.876714285714286" stroke-width="1.71"></path></g></svg>'
          },
          {
            id: 'feature-1',
            label: 'Feature-1',
            content: '',
            category: 'Feature',
            media: ''
          },
          {
            id: 'header-1',
            label: 'Header-1',
            content: '<style>\n' +
              '.img-circle {\n' +
              '  width: 35px;\n' +
              '  height: 35px;\n' +
              '  display: flex;\n' +
              '  justify-content: center;\n' +
              '  align-items: center;\n' +
              '  margin: 1rem 1rem 1rem 5%;\n' +
              '  background: #6366f1;\n' +
              '  border: 3px solid transparent;\n' +
              '  border-radius: 5rem;\n' +
              '}\n' +
              '.img-text {\n' +
              '  opacity: 1;\n' +
              '  font-size: 1.25rem;\n' +
              '  font-weight: 500;\n' +
              '  font-family: inherit;\n' +
              '  color: #111827;\n' +
              '  line-height: 1.75rem;\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '}\n' +
              '.link-text {\n' +
              '  font-size: 1.25rem;\n' +
              '  font-weight: 500;\n' +
              '  font-family: inherit;\n' +
              '  color: #4B5563;\n' +
              '  line-height: 1.5rem;\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '  margin-right: 1.25rem;\n' +
              '  text-decoration: none;\n' +
              '}\n' +
              '.link-container {\n' +
              '  display: flex;\n' +
              '  flex-direction: row;\n' +
              '  margin-left: auto;\n' +
              '}\n' +
              '.btn {\n' +
              '  display: flex;\n' +
              '  justify-content: center;\n' +
              '  align-items: center;\n' +
              '  margin-right: 1.25rem;\n' +
              '  color: black;\n' +
              '}\n' +
              '.btn-style {\n' +
              '  font-weight: 500;\n' +
              '  line-height: 1.25rem;\n' +
              '  font-size: 1rem;\n' +
              '  background: #F3F4F6;\n' +
              '  border: 3px solid transparent;\n' +
              '  border-radius: 0.25rem;\n' +
              '  text-align: center;\n' +
              '  padding-inline: 6px;\n' +
              '  letter-spacing: normal;\n' +
              '  text-shadow: none;\n' +
              '  word-spacing: normal;\n' +
              '  opacity: 1;\n' +
              '}\n' +
              '</style>\n' +
              '<nav style="width: 100%">\n' +
              '  <div style="display: flex; flex-direction: row">\n' +
              '    <div class="img-circle">\n' +
              '      <svg viewBox="-0.25 -0.25 24 24" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11.945833333333333 11.175229166666666a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 6.813041666666667a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667L11.554166666666667 1.5539375a0.4895833333333333 0.4895833333333333 0 0 1 0.39166666666666666 0l10.0315625 4.3621875a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path><path d="m20.1953125 10.526041666666666 1.7820833333333332 0.7755a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667L11.945833333333333 16.560645833333332a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 12.198458333333333a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667l1.7820833333333332 -0.7755" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path><path d="m20.1953125 15.911458333333332 1.7820833333333332 0.7755a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667L11.945833333333333 21.9460625a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 17.583875a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667l1.7820833333333332 -0.7755" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path></svg>\n' +
              '    </div>\n' +
              '    <p class="img-text"><b>Label</b></p>\n' +
              '    <div class="link-container">\n' +
              '      <a href="" class="link-text">First Link</a>\n' +
              '      <a href="" class="link-text">Second Link</a>\n' +
              '      <a href="" class="link-text">Third Link</a>\n' +
              '      <a href="" class="link-text">Fourth Link</a>\n' +
              '    </div>\n' +
              '    <div class="btn">\n' +
              '      <button class="btn-style">\n' +
              '        Button\n' +
              '      </button>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</nav>\n',
            category: 'Header',
            media: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.75 -0.75 24 24" height="24" width="24"><g id="layout-window-4--column-header-layout-layouts-masthead-sidebar"><path id="Vector 883" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.03125v13.59375" stroke-width="1.5"></path><path id="Rectangle 1096" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M20.84109375 3.8704687499999997c-0.09749999999999999 -1.19765625 -1.01390625 -2.1140624999999997 -2.2115625 -2.2115625C17.11640625 1.53609375 14.701875000000001 1.40625 11.25 1.40625c-3.451875 0 -5.866406250000001 0.12984375 -7.37953125 0.25265625 -1.19765625 0.09749999999999999 -2.1140624999999997 1.01390625 -2.2115625 2.2115625C1.53609375 5.383593749999999 1.40625 7.798125 1.40625 11.25c0 3.451875 0.12984375 5.866406250000001 0.25265625 7.37953125 0.09749999999999999 1.19765625 1.01390625 2.1140624999999997 2.2115625 2.2115625C5.383593749999999 20.96390625 7.798125 21.09375 11.25 21.09375c3.451875 0 5.866406250000001 -0.12984375 7.37953125 -0.25265625 1.19765625 -0.09749999999999999 2.1140624999999997 -1.01390625 2.2115625 -2.2115625C20.96390625 17.11640625 21.09375 14.701875000000001 21.09375 11.25c0 -3.451875 -0.12984375 -5.866406250000001 -0.25265625 -7.37953125Z" stroke-width="1.5"></path><path id="Intersect" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M21.021562499999998 7.03125H1.479375" stroke-width="1.5"></path></g></svg>'
          },
          {
            id: 'header-2',
            label: 'Header-2',
            content: '<style>\n' +
              '.img-circle {\n' +
              '  width: 35px;\n' +
              '  height: 35px;\n' +
              '  display: flex;\n' +
              '  justify-content: center;\n' +
              '  align-items: center;\n' +
              '  margin: 1rem 1rem 1rem 5%;\n' +
              '  background: #6366f1;\n' +
              '  border: 3px solid transparent;\n' +
              '  border-radius: 5rem;\n' +
              '}\n' +
              '.img-text {\n' +
              '  opacity: 1;\n' +
              '  font-size: 1.25rem;\n' +
              '  font-weight: 500;\n' +
              '  font-family: inherit;\n' +
              '  color: #111827;\n' +
              '  line-height: 1.75rem;\n' +
              '  margin-right: 1.25rem;\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '}\n' +
              '.link-text {\n' +
              '  font-size: 1.25rem;\n' +
              '  font-weight: 500;\n' +
              '  font-family: inherit;\n' +
              '  color: #4B5563;\n' +
              '  line-height: 1.5rem;\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '  margin-right: 1.25rem;\n' +
              '  margin-left: 1.25rem;\n' +
              '  text-decoration: none;\n' +
              '}\n' +
              '.link-container {\n' +
              '  display: flex;\n' +
              '  flex-direction: row;\n' +
              '}\n' +
              '.btn {\n' +
              '  display: flex;\n' +
              '  justify-content: center;\n' +
              '  align-items: center;\n' +
              '  margin-right: 2rem;\n' +
              '  color: black;\n' +
              '  margin-left: auto;\n' +
              '}\n' +
              '.btn-style {\n' +
              '  font-weight: 500;\n' +
              '  line-height: 1.25rem;\n' +
              '  font-size: 1rem;\n' +
              '  background: #F3F4F6;\n' +
              '  border: 3px solid transparent;\n' +
              '  border-radius: 0.25rem;\n' +
              '  text-align: center;\n' +
              '  padding-inline: 6px;\n' +
              '  letter-spacing: normal;\n' +
              '  text-shadow: none;\n' +
              '  word-spacing: normal;\n' +
              '  opacity: 1;\n' +
              '}\n' +
              '</style>\n' +
              '<nav style="width: 100%">\n' +
              '  <div style="display: flex; flex-direction: row">\n' +
              '    <div class="img-circle">\n' +
              '      <svg viewBox="-0.25 -0.25 24 24" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11.945833333333333 11.175229166666666a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 6.813041666666667a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667L11.554166666666667 1.5539375a0.4895833333333333 0.4895833333333333 0 0 1 0.39166666666666666 0l10.0315625 4.3621875a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path><path d="m20.1953125 10.526041666666666 1.7820833333333332 0.7755a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667L11.945833333333333 16.560645833333332a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 12.198458333333333a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667l1.7820833333333332 -0.7755" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path><path d="m20.1953125 15.911458333333332 1.7820833333333332 0.7755a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667L11.945833333333333 21.9460625a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 17.583875a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667l1.7820833333333332 -0.7755" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path></svg>\n' +
              '    </div>\n' +
              '    <p class="img-text"><b>Label</b></p>\n' +
              '    <div class="link-container">\n' +
              '      <a href="" class="link-text">First Link</a>\n' +
              '      <a href="" class="link-text">Second Link</a>\n' +
              '      <a href="" class="link-text">Third Link</a>\n' +
              '      <a href="" class="link-text">Fourth Link</a>\n' +
              '    </div>\n' +
              '    <div class="btn">\n' +
              '      <button class="btn-style">\n' +
              '        Button\n' +
              '      </button>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</nav>\n',
            category: "Header",
            media: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.75 -0.75 24 24" height="24" width="24"><g id="layout-window-4--column-header-layout-layouts-masthead-sidebar"><path id="Vector 883" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.03125v13.59375" stroke-width="1.5"></path><path id="Rectangle 1096" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M20.84109375 3.8704687499999997c-0.09749999999999999 -1.19765625 -1.01390625 -2.1140624999999997 -2.2115625 -2.2115625C17.11640625 1.53609375 14.701875000000001 1.40625 11.25 1.40625c-3.451875 0 -5.866406250000001 0.12984375 -7.37953125 0.25265625 -1.19765625 0.09749999999999999 -2.1140624999999997 1.01390625 -2.2115625 2.2115625C1.53609375 5.383593749999999 1.40625 7.798125 1.40625 11.25c0 3.451875 0.12984375 5.866406250000001 0.25265625 7.37953125 0.09749999999999999 1.19765625 1.01390625 2.1140624999999997 2.2115625 2.2115625C5.383593749999999 20.96390625 7.798125 21.09375 11.25 21.09375c3.451875 0 5.866406250000001 -0.12984375 7.37953125 -0.25265625 1.19765625 -0.09749999999999999 2.1140624999999997 -1.01390625 2.2115625 -2.2115625C20.96390625 17.11640625 21.09375 14.701875000000001 21.09375 11.25c0 -3.451875 -0.12984375 -5.866406250000001 -0.25265625 -7.37953125Z" stroke-width="1.5"></path><path id="Intersect" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M21.021562499999998 7.03125H1.479375" stroke-width="1.5"></path></g></svg>'
          },
          {
            id: 'header-3',
            label: 'Header-3',
            content: '<style>\n' +
              '.img-circle {\n' +
              '  width: 35px;\n' +
              '  height: 35px;\n' +
              '  display: flex;\n' +
              '  justify-content: center;\n' +
              '  align-items: center;\n' +
              '  margin: 1rem 1rem 1rem 25%;\n' +
              '  background: #6366f1;\n' +
              '  border: 3px solid transparent;\n' +
              '  border-radius: 5rem;\n' +
              '}\n' +
              '.img-text {\n' +
              '  opacity: 1;\n' +
              '  font-size: 1.25rem;\n' +
              '  font-weight: 500;\n' +
              '  font-family: inherit;\n' +
              '  color: #111827;\n' +
              '  line-height: 1.75rem;\n' +
              '  margin-right: 1.25rem;\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '}\n' +
              '.link-text {\n' +
              '  font-size: 1.15rem;\n' +
              '  font-weight: 500;\n' +
              '  font-family: inherit;\n' +
              '  color: #4B5563;\n' +
              '  line-height: 1rem;\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '  margin-right: 1.25rem;\n' +
              '  margin-left: 1.25rem;\n' +
              '  text-decoration: none;\n' +
              '}\n' +
              '.link-container {\n' +
              '  display: flex;\n' +
              '  flex-direction: row;\n' +
              '}\n' +
              '.btn {\n' +
              '  display: flex;\n' +
              '  justify-content: center;\n' +
              '  align-items: center;\n' +
              '  margin-right: 2rem;\n' +
              '  color: black;\n' +
              '  margin-left: auto;\n' +
              '}\n' +
              '.btn-style {\n' +
              '  font-weight: 500;\n' +
              '  line-height: 1.25rem;\n' +
              '  font-size: 1rem;\n' +
              '  background: #F3F4F6;\n' +
              '  border: 3px solid transparent;\n' +
              '  border-radius: 0.25rem;\n' +
              '  text-align: center;\n' +
              '  padding-inline: 6px;\n' +
              '  letter-spacing: normal;\n' +
              '  text-shadow: none;\n' +
              '  word-spacing: normal;\n' +
              '  opacity: 1;\n' +
              '}\n' +
              '</style>\n' +
              '<nav style="width: 100%">\n' +
              '  <div style="display: flex; flex-direction: row">\n' +
              '    <div class="link-container">\n' +
              '      <a href="" class="link-text">First Link</a>\n' +
              '      <a href="" class="link-text">Second Link</a>\n' +
              '      <a href="" class="link-text">Third Link</a>\n' +
              '      <a href="" class="link-text">Fourth Link</a>\n' +
              '    </div>\n' +
              '    <div class="img-circle">\n' +
              '      <svg viewBox="-0.25 -0.25 24 24" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11.945833333333333 11.175229166666666a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 6.813041666666667a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667L11.554166666666667 1.5539375a0.4895833333333333 0.4895833333333333 0 0 1 0.39166666666666666 0l10.0315625 4.3621875a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path><path d="m20.1953125 10.526041666666666 1.7820833333333332 0.7755a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667L11.945833333333333 16.560645833333332a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 12.198458333333333a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667l1.7820833333333332 -0.7755" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path><path d="m20.1953125 15.911458333333332 1.7820833333333332 0.7755a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667L11.945833333333333 21.9460625a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 17.583875a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667l1.7820833333333332 -0.7755" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path></svg>\n' +
              '    </div>\n' +
              '    <p class="img-text"><b>Label</b></p>\n' +
              '    <div class="btn">\n' +
              '      <button class="btn-style">\n' +
              '        Button\n' +
              '      </button>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</nav>\n',
            category: 'Header',
            media: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.75 -0.75 24 24" height="24" width="24"><g id="layout-window-4--column-header-layout-layouts-masthead-sidebar"><path id="Vector 883" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.03125v13.59375" stroke-width="1.5"></path><path id="Rectangle 1096" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M20.84109375 3.8704687499999997c-0.09749999999999999 -1.19765625 -1.01390625 -2.1140624999999997 -2.2115625 -2.2115625C17.11640625 1.53609375 14.701875000000001 1.40625 11.25 1.40625c-3.451875 0 -5.866406250000001 0.12984375 -7.37953125 0.25265625 -1.19765625 0.09749999999999999 -2.1140624999999997 1.01390625 -2.2115625 2.2115625C1.53609375 5.383593749999999 1.40625 7.798125 1.40625 11.25c0 3.451875 0.12984375 5.866406250000001 0.25265625 7.37953125 0.09749999999999999 1.19765625 1.01390625 2.1140624999999997 2.2115625 2.2115625C5.383593749999999 20.96390625 7.798125 21.09375 11.25 21.09375c3.451875 0 5.866406250000001 -0.12984375 7.37953125 -0.25265625 1.19765625 -0.09749999999999999 2.1140624999999997 -1.01390625 2.2115625 -2.2115625C20.96390625 17.11640625 21.09375 14.701875000000001 21.09375 11.25c0 -3.451875 -0.12984375 -5.866406250000001 -0.25265625 -7.37953125Z" stroke-width="1.5"></path><path id="Intersect" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M21.021562499999998 7.03125H1.479375" stroke-width="1.5"></path></g></svg>'
          },
          {
            id: 'header-4',
            label: 'Header-4',
            content: '<style>\n' +
              '.img-circle {\n' +
              '  width: 35px;\n' +
              '  height: 35px;\n' +
              '  display: flex;\n' +
              '  justify-content: center;\n' +
              '  align-items: center;\n' +
              '  margin: 1rem 1rem 1rem 5%;\n' +
              '  background: #6366f1;\n' +
              '  border: 3px solid transparent;\n' +
              '  border-radius: 5rem;\n' +
              '}\n' +
              '.img-text {\n' +
              '  opacity: 1;\n' +
              '  font-size: 1.25rem;\n' +
              '  font-weight: 500;\n' +
              '  font-family: inherit;\n' +
              '  color: #111827;\n' +
              '  line-height: 1.75rem;\n' +
              '  margin-right: 1.25rem;\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '}\n' +
              '.link-text {\n' +
              '  font-size: 1.25rem;\n' +
              '  font-weight: 500;\n' +
              '  font-family: inherit;\n' +
              '  color: #4B5563;\n' +
              '  line-height: 1.5rem;\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '  margin-right: 1.25rem;\n' +
              '  margin-left: 1.25rem;\n' +
              '  text-decoration: none;\n' +
              '}\n' +
              '.link-container {\n' +
              '  display: flex;\n' +
              '  flex-direction: row;\n' +
              '  margin-left: 25%;\n' +
              '}\n' +
              '.btn {\n' +
              '  display: flex;\n' +
              '  justify-content: center;\n' +
              '  align-items: center;\n' +
              '  margin-right: 2rem;\n' +
              '  color: black;\n' +
              '  margin-left: auto;\n' +
              '}\n' +
              '.btn-style {\n' +
              '  font-weight: 500;\n' +
              '  line-height: 1.25rem;\n' +
              '  font-size: 1rem;\n' +
              '  background: #F3F4F6;\n' +
              '  border: 3px solid transparent;\n' +
              '  border-radius: 0.25rem;\n' +
              '  text-align: center;\n' +
              '  padding-inline: 6px;\n' +
              '  letter-spacing: normal;\n' +
              '  text-shadow: none;\n' +
              '  word-spacing: normal;\n' +
              '  opacity: 1;\n' +
              '}\n' +
              '</style>\n' +
              '<nav style="width: 100%">\n' +
              '  <div style="display: flex; flex-direction: row">\n' +
              '    <div class="img-circle">\n' +
              '      <svg viewBox="-0.25 -0.25 24 24" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11.945833333333333 11.175229166666666a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 6.813041666666667a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667L11.554166666666667 1.5539375a0.4895833333333333 0.4895833333333333 0 0 1 0.39166666666666666 0l10.0315625 4.3621875a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path><path d="m20.1953125 10.526041666666666 1.7820833333333332 0.7755a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667L11.945833333333333 16.560645833333332a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 12.198458333333333a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667l1.7820833333333332 -0.7755" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path><path d="m20.1953125 15.911458333333332 1.7820833333333332 0.7755a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667L11.945833333333333 21.9460625a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 17.583875a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667l1.7820833333333332 -0.7755" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path></svg>\n' +
              '    </div>\n' +
              '    <p class="img-text"><b>Label</b></p>\n' +
              '    <div class="link-container">\n' +
              '      <a href="" class="link-text">First Link</a>\n' +
              '      <a href="" class="link-text">Second Link</a>\n' +
              '      <a href="" class="link-text">Third Link</a>\n' +
              '      <a href="" class="link-text">Fourth Link</a>\n' +
              '    </div>\n' +
              '    <div class="btn">\n' +
              '      <button class="btn-style">\n' +
              '        Button\n' +
              '      </button>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</nav>\n',
            category: 'Header',
            media: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.75 -0.75 24 24" height="24" width="24"><g id="layout-window-4--column-header-layout-layouts-masthead-sidebar"><path id="Vector 883" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.03125v13.59375" stroke-width="1.5"></path><path id="Rectangle 1096" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M20.84109375 3.8704687499999997c-0.09749999999999999 -1.19765625 -1.01390625 -2.1140624999999997 -2.2115625 -2.2115625C17.11640625 1.53609375 14.701875000000001 1.40625 11.25 1.40625c-3.451875 0 -5.866406250000001 0.12984375 -7.37953125 0.25265625 -1.19765625 0.09749999999999999 -2.1140624999999997 1.01390625 -2.2115625 2.2115625C1.53609375 5.383593749999999 1.40625 7.798125 1.40625 11.25c0 3.451875 0.12984375 5.866406250000001 0.25265625 7.37953125 0.09749999999999999 1.19765625 1.01390625 2.1140624999999997 2.2115625 2.2115625C5.383593749999999 20.96390625 7.798125 21.09375 11.25 21.09375c3.451875 0 5.866406250000001 -0.12984375 7.37953125 -0.25265625 1.19765625 -0.09749999999999999 2.1140624999999997 -1.01390625 2.2115625 -2.2115625C20.96390625 17.11640625 21.09375 14.701875000000001 21.09375 11.25c0 -3.451875 -0.12984375 -5.866406250000001 -0.25265625 -7.37953125Z" stroke-width="1.5"></path><path id="Intersect" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M21.021562499999998 7.03125H1.479375" stroke-width="1.5"></path></g></svg>'
          },
          {
            id: 'footer-1',
            label: 'Footer-1',
            content: '<style>\n' +
              '.img-circle {\n' +
              '  width: 35px;\n' +
              '  height: 35px;\n' +
              '  display: flex;\n' +
              '  justify-content: center;\n' +
              '  align-items: center;\n' +
              '  margin: 1rem 1rem 1rem 15%;\n' +
              '  background: #6366f1;\n' +
              '  border: 3px solid transparent;\n' +
              '  border-radius: 5rem;\n' +
              '}\n' +
              '.img-text {\n' +
              '  opacity: 1;\n' +
              '  font-size: 1.25rem;\n' +
              '  font-weight: 500;\n' +
              '  font-family: inherit;\n' +
              '  color: #111827;\n' +
              '  line-height: 1.75rem;\n' +
              '  margin-right: 1.25rem;\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '  border-right: solid #e5e7eb;\n' +
              '  border-width: thin;\n' +
              '  padding-right: 2rem;\n' +
              '}\n' +
              '.footer-text {\n' +
              '  font-size: 1rem;\n' +
              '  font-weight: 500;\n' +
              '  font-family: inherit;\n' +
              '  line-height: 1.25rem;\n' +
              '  word-spacing: normal;\n' +
              '  letter-spacing: normal;\n' +
              '  color: #4B5563;\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '  margin-left: 1.25rem;\n' +
              '  margin-right: 1.25rem;\n' +
              '  text-decoration: none;\n' +
              '  opacity: 1;\n' +
              '}\n' +
              '.social {\n' +
              '  display: flex;\n' +
              '  justify-content: center;\n' +
              '  align-items: center;\n' +
              '  margin-right: 15%;\n' +
              '  color: black;\n' +
              '  margin-left: auto;\n' +
              '}\n' +
              '.icons {\n' +
              '  margin-left: 1rem;\n' +
              '}\n' +
              '</style>\n' +
              '<footer style="width: 100%">\n' +
              '  <div style="display: flex; flex-direction: row">\n' +
              '    <div class="img-circle">\n' +
              '      <svg viewBox="-0.25 -0.25 24 24" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11.945833333333333 11.175229166666666a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 6.813041666666667a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667L11.554166666666667 1.5539375a0.4895833333333333 0.4895833333333333 0 0 1 0.39166666666666666 0l10.0315625 4.3621875a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path><path d="m20.1953125 10.526041666666666 1.7820833333333332 0.7755a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667L11.945833333333333 16.560645833333332a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 12.198458333333333a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667l1.7820833333333332 -0.7755" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path><path d="m20.1953125 15.911458333333332 1.7820833333333332 0.7755a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667L11.945833333333333 21.9460625a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 17.583875a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667l1.7820833333333332 -0.7755" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path></svg>\n' +
              '    </div>\n' +
              '    <p class="img-text"><b>Label</b></p>\n' +
              '    <p class="footer-text">2023 Label</p>\n' +
              '    <div class="social">\n' +
              '      <div>\n' +
              '        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><path fill="#000000" d="M13.5 1A4.5 4.5 0 0 0 9 5.5V9H6.5a0.5 0.5 0 0 0 -0.5 0.5v4a0.5 0.5 0 0 0 0.5 0.5H9v8.5a0.5 0.5 0 0 0 0.5 0.5h4a0.5 0.5 0 0 0 0.5 -0.5V14h2.5a0.5 0.5 0 0 0 0.485 -0.379l1 -4A0.5 0.5 0 0 0 17.5 9H14V7.5A1.5 1.5 0 0 1 15.5 6h2a0.5 0.5 0 0 0 0.5 -0.5v-4a0.5 0.5 0 0 0 -0.5 -0.5h-4Z" stroke-width="1"></path></svg>\n' +
              '      </div>\n' +
              '      <div class="icons">\n' +
              '        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><path fill="#000000" d="M1 19c15.617 6.062 20.038 -5.025 19.905 -10.5C22.173 8.156 23 7.292 23 6.406c-1.048 0.55 -1.595 0.394 -2.119 0 1.128 -0.768 1.071 -1.863 1.071 -2.619 -0.527 0.277 -1.503 0.96 -2.619 1.048 -0.745 -1.166 -2.619 -2.095 -5.238 -1.048 -2.619 1.048 -3.143 3.842 -2.619 5.238 -3.352 0 -7.333 -3.492 -8.905 -5.238 -1.883 2.688 0.5 5.353 1.572 6.286 -0.715 0.214 -1.572 0 -2.095 -0.524 0 2.991 2.619 4.19 3.666 4.715H3.62c0 2.095 2.444 2.968 3.667 3.142 -0.838 0.838 -4.215 1.596 -6.286 1.596Z" stroke-width="1"></path></svg>\n' +
              '      </div>\n' +
              '      <div class="icons">\n' +
              '        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><g id="instagram"><path id="Subtract" fill="#000" fill-rule="evenodd" d="M5.811428571428571 1.3491428571428572A4.4639999999999995 4.4639999999999995 0 0 0 1.3474285714285714 5.811428571428571v11.904a4.4639999999999995 4.4639999999999995 0 0 0 4.4639999999999995 4.4639999999999995h11.904a4.4639999999999995 4.4639999999999995 0 0 0 4.462285714285715 -4.4639999999999995V5.811428571428571A4.4639999999999995 4.4639999999999995 0 0 0 17.71542857142857 1.3491428571428572H5.811428571428571Zm13.187999999999999 4.469142857142857a1.2857142857142856 1.2857142857142856 0 1 1 -2.571428571428571 0 1.2857142857142856 1.2857142857142856 0 0 1 2.571428571428571 0Zm-7.234285714285713 2.379428571428571a3.565714285714286 3.565714285714286 0 1 0 0 7.131428571428572 3.565714285714286 3.565714285714286 0 0 0 0 -7.131428571428572Zm-5.281714285714285 3.565714285714286a5.28 5.28 0 1 1 10.56 0 5.28 5.28 0 0 1 -10.56 0Z" clip-rule="evenodd" stroke-width="1.7142857142857142"></path></g></svg>\n' +
              '      </div>\n' +
              '      <div class="icons">\n' +
              '        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><path fill="#000000" fill-rule="evenodd" d="M12 23c6.075 0 11 -4.925 11 -11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11ZM4.982 11.175c0 -0.102 0.067 -0.198 0.162 -0.234l12.324 -4.697a0.254 0.254 0 0 1 0.254 0.046c0.068 0.06 0.1 0.157 0.078 0.246l-2.458 10.338a0.254 0.254 0 0 1 -0.156 0.177 0.253 0.253 0 0 1 -0.234 -0.032l-2.619 -1.895 -0.1 0.066a157.1 157.1 0 0 1 -1.196 0.788 46.23 46.23 0 0 1 -0.943 0.6 9.536 9.536 0 0 1 -0.352 0.207 2.277 2.277 0 0 1 -0.14 0.072 0.93 0.93 0 0 1 -0.078 0.033 0.716 0.716 0 0 1 -0.722 -0.165 0.775 0.775 0 0 1 -0.202 -0.394l-0.001 -0.005 -0.803 -3.949 -2.652 -0.968a0.255 0.255 0 0 1 -0.162 -0.234Zm3.792 0.993 0.727 3.577 0.81 -2.463 4.142 -3.715a0.154 0.154 0 0 0 0.023 -0.196 0.154 0.154 0 0 0 -0.19 -0.05l-5.512 2.847Z" clip-rule="evenodd" stroke-width="1"></path></svg>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</footer>\n',
            category: 'Footer',
            media: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><g id="dashboard-circle--app-application-dashboard-home-layout-circle"><path id="Union" fill="#000" fill-rule="evenodd" d="M10.285714285714285 5.142857142857142a5.142857142857142 5.142857142857142 0 1 1 -10.285714285714285 0 5.142857142857142 5.142857142857142 0 0 1 10.285714285714285 0Zm13.714285714285714 0a5.142857142857142 5.142857142857142 0 1 1 -10.285714285714285 0 5.142857142857142 5.142857142857142 0 0 1 10.285714285714285 0ZM5.142857142857142 24a5.142857142857142 5.142857142857142 0 1 0 0 -10.285714285714285 5.142857142857142 5.142857142857142 0 0 0 0 10.285714285714285Zm18.857142857142858 -5.142857142857142a5.142857142857142 5.142857142857142 0 1 1 -10.285714285714285 0 5.142857142857142 5.142857142857142 0 0 1 10.285714285714285 0Z" clip-rule="evenodd" stroke-width="1.7142857142857142"></path></g></svg>'
          },
          {
            id: 'footer-2',
            label: 'Footer-2',
            content: '<style>\n' +
              '  .footer-text {\n' +
              '    font-size: 1rem;\n' +
              '    font-weight: 500;\n' +
              '    font-family: inherit;\n' +
              '    line-height: 1.25rem;\n' +
              '    word-spacing: normal;\n' +
              '    letter-spacing: normal;\n' +
              '    color: #4B5563;\n' +
              '    display: flex;\n' +
              '    align-items: center;\n' +
              '    margin-left: 1.25rem;\n' +
              '    margin-right: 1.25rem;\n' +
              '    text-decoration: none;\n' +
              '    opacity: 1;\n' +
              '  }\n' +
              '  .social {\n' +
              '    display: flex;\n' +
              '    justify-content: center;\n' +
              '    align-items: center;\n' +
              '    margin-right: 15%;\n' +
              '    color: black;\n' +
              '    margin-left: auto;\n' +
              '  }\n' +
              '  .icons {\n' +
              '    margin-left: 1rem;\n' +
              '  }\n' +
              '  .img-circle {\n' +
              '    width: 35px;\n' +
              '    height: 35px;\n' +
              '    display: flex;\n' +
              '    justify-content: center;\n' +
              '    align-items: center;\n' +
              '    margin: 1rem 1rem 1rem 15%;\n' +
              '    background: #6366f1;\n' +
              '    border: 3px solid transparent;\n' +
              '    border-radius: 5rem;\n' +
              '  }\n' +
              '  .img-text {\n' +
              '    opacity: 1;\n' +
              '    font-size: 1.25rem;\n' +
              '    font-weight: 500;\n' +
              '    font-family: inherit;\n' +
              '    color: #111827;\n' +
              '    line-height: 1.75rem;\n' +
              '    margin-right: 1.25rem;\n' +
              '    display: flex;\n' +
              '    align-items: center;\n' +
              '    border-right: solid #e5e7eb;\n' +
              '    border-width: thin;\n' +
              '    padding-right: 2rem;\n' +
              '  }\n' +
              '.link-container {\n' +
              '  flex: 1 0 25%;\n' +
              '  display: flex;\n' +
              '  flex-direction: column;\n' +
              '  justify-content: center;\n' +
              '}\n' +
              '.header-link-text {\n' +
              '  color: #111827;\n' +
              '  letter-spacing: 0.1em;\n' +
              '  line-height: 1.25rem;\n' +
              '  font-weight: 500;\n' +
              '  font-family: "Segoe UI";\n' +
              '  opacity: 1;\n' +
              '}\n' +
              '.link-text {\n' +
              '  font-size: 1.15rem;\n' +
              '  font-weight: 500;\n' +
              '  color: #4B5563;\n' +
              '  line-height: 1.5rem;\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '  margin-right: 1.25rem;\n' +
              '  text-decoration: none;\n' +
              '  font-family: "ui-sans-serif";\n' +
              '}\n' +
              '</style>\n' +
              '<footer style="width: 100%">\n' +
              '  <div style="display: flex; justify-content: center; align-items: center; margin: 5rem">\n' +
              '    <div class="link-container" style="align-items: center">\n' +
              '      <div>\n' +
              '        <p class="header-link-text">CATEGORIES</p>\n' +
              '        <a class="link-text">First Link</a>\n' +
              '        <a class="link-text">Second Link</a>\n' +
              '        <a class="link-text">Third Link</a>\n' +
              '        <a class="link-text">Fourth Link</a>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '    <div class="link-container" style="align-items: center">\n' +
              '      <div>\n' +
              '        <p class="header-link-text">CATEGORIES</p>\n' +
              '        <a class="link-text">First Link</a>\n' +
              '        <a class="link-text">Second Link</a>\n' +
              '        <a class="link-text">Third Link</a>\n' +
              '        <a class="link-text">Fourth Link</a>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '    <div class="link-container" style="align-items: center">\n' +
              '      <div>\n' +
              '        <p class="header-link-text">CATEGORIES</p>\n' +
              '        <a class="link-text">First Link</a>\n' +
              '        <a class="link-text">Second Link</a>\n' +
              '        <a class="link-text">Third Link</a>\n' +
              '        <a class="link-text">Fourth Link</a>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '  <div style="display: flex; flex-direction: row; background: #F3F4F6">\n' +
              '    <div class="img-circle">\n' +
              '      <svg viewBox="-0.25 -0.25 24 24" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11.945833333333333 11.175229166666666a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 6.813041666666667a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667L11.554166666666667 1.5539375a0.4895833333333333 0.4895833333333333 0 0 1 0.39166666666666666 0l10.0315625 4.3621875a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path><path d="m20.1953125 10.526041666666666 1.7820833333333332 0.7755a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667L11.945833333333333 16.560645833333332a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 12.198458333333333a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667l1.7820833333333332 -0.7755" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path><path d="m20.1953125 15.911458333333332 1.7820833333333332 0.7755a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667L11.945833333333333 21.9460625a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 17.583875a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667l1.7820833333333332 -0.7755" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path></svg>\n' +
              '    </div>\n' +
              '    <p class="img-text"><b>Label</b></p>\n' +
              '    <p class="footer-text">2023 Label</p>\n' +
              '    <div class="social">\n' +
              '      <div>\n' +
              '        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><path fill="#000000" d="M13.5 1A4.5 4.5 0 0 0 9 5.5V9H6.5a0.5 0.5 0 0 0 -0.5 0.5v4a0.5 0.5 0 0 0 0.5 0.5H9v8.5a0.5 0.5 0 0 0 0.5 0.5h4a0.5 0.5 0 0 0 0.5 -0.5V14h2.5a0.5 0.5 0 0 0 0.485 -0.379l1 -4A0.5 0.5 0 0 0 17.5 9H14V7.5A1.5 1.5 0 0 1 15.5 6h2a0.5 0.5 0 0 0 0.5 -0.5v-4a0.5 0.5 0 0 0 -0.5 -0.5h-4Z" stroke-width="1"></path></svg>\n' +
              '      </div>\n' +
              '      <div class="icons">\n' +
              '        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><path fill="#000000" d="M1 19c15.617 6.062 20.038 -5.025 19.905 -10.5C22.173 8.156 23 7.292 23 6.406c-1.048 0.55 -1.595 0.394 -2.119 0 1.128 -0.768 1.071 -1.863 1.071 -2.619 -0.527 0.277 -1.503 0.96 -2.619 1.048 -0.745 -1.166 -2.619 -2.095 -5.238 -1.048 -2.619 1.048 -3.143 3.842 -2.619 5.238 -3.352 0 -7.333 -3.492 -8.905 -5.238 -1.883 2.688 0.5 5.353 1.572 6.286 -0.715 0.214 -1.572 0 -2.095 -0.524 0 2.991 2.619 4.19 3.666 4.715H3.62c0 2.095 2.444 2.968 3.667 3.142 -0.838 0.838 -4.215 1.596 -6.286 1.596Z" stroke-width="1"></path></svg>\n' +
              '      </div>\n' +
              '      <div class="icons">\n' +
              '        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><g id="instagram"><path id="Subtract" fill="#000" fill-rule="evenodd" d="M5.811428571428571 1.3491428571428572A4.4639999999999995 4.4639999999999995 0 0 0 1.3474285714285714 5.811428571428571v11.904a4.4639999999999995 4.4639999999999995 0 0 0 4.4639999999999995 4.4639999999999995h11.904a4.4639999999999995 4.4639999999999995 0 0 0 4.462285714285715 -4.4639999999999995V5.811428571428571A4.4639999999999995 4.4639999999999995 0 0 0 17.71542857142857 1.3491428571428572H5.811428571428571Zm13.187999999999999 4.469142857142857a1.2857142857142856 1.2857142857142856 0 1 1 -2.571428571428571 0 1.2857142857142856 1.2857142857142856 0 0 1 2.571428571428571 0Zm-7.234285714285713 2.379428571428571a3.565714285714286 3.565714285714286 0 1 0 0 7.131428571428572 3.565714285714286 3.565714285714286 0 0 0 0 -7.131428571428572Zm-5.281714285714285 3.565714285714286a5.28 5.28 0 1 1 10.56 0 5.28 5.28 0 0 1 -10.56 0Z" clip-rule="evenodd" stroke-width="1.7142857142857142"></path></g></svg>\n' +
              '      </div>\n' +
              '      <div class="icons">\n' +
              '        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><path fill="#000000" fill-rule="evenodd" d="M12 23c6.075 0 11 -4.925 11 -11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11ZM4.982 11.175c0 -0.102 0.067 -0.198 0.162 -0.234l12.324 -4.697a0.254 0.254 0 0 1 0.254 0.046c0.068 0.06 0.1 0.157 0.078 0.246l-2.458 10.338a0.254 0.254 0 0 1 -0.156 0.177 0.253 0.253 0 0 1 -0.234 -0.032l-2.619 -1.895 -0.1 0.066a157.1 157.1 0 0 1 -1.196 0.788 46.23 46.23 0 0 1 -0.943 0.6 9.536 9.536 0 0 1 -0.352 0.207 2.277 2.277 0 0 1 -0.14 0.072 0.93 0.93 0 0 1 -0.078 0.033 0.716 0.716 0 0 1 -0.722 -0.165 0.775 0.775 0 0 1 -0.202 -0.394l-0.001 -0.005 -0.803 -3.949 -2.652 -0.968a0.255 0.255 0 0 1 -0.162 -0.234Zm3.792 0.993 0.727 3.577 0.81 -2.463 4.142 -3.715a0.154 0.154 0 0 0 0.023 -0.196 0.154 0.154 0 0 0 -0.19 -0.05l-5.512 2.847Z" clip-rule="evenodd" stroke-width="1"></path></svg>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</footer>\n',
            category: 'Footer',
            media: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><g id="dashboard-circle--app-application-dashboard-home-layout-circle"><path id="Union" fill="#000" fill-rule="evenodd" d="M10.285714285714285 5.142857142857142a5.142857142857142 5.142857142857142 0 1 1 -10.285714285714285 0 5.142857142857142 5.142857142857142 0 0 1 10.285714285714285 0Zm13.714285714285714 0a5.142857142857142 5.142857142857142 0 1 1 -10.285714285714285 0 5.142857142857142 5.142857142857142 0 0 1 10.285714285714285 0ZM5.142857142857142 24a5.142857142857142 5.142857142857142 0 1 0 0 -10.285714285714285 5.142857142857142 5.142857142857142 0 0 0 0 10.285714285714285Zm18.857142857142858 -5.142857142857142a5.142857142857142 5.142857142857142 0 1 1 -10.285714285714285 0 5.142857142857142 5.142857142857142 0 0 1 10.285714285714285 0Z" clip-rule="evenodd" stroke-width="1.7142857142857142"></path></g></svg>'
          },
          {
            id: 'footer-3',
            label: 'Footer-3',
            content: '<style>\n' +
              '  .footer-text {\n' +
              '    font-size: 1rem;\n' +
              '    font-weight: 500;\n' +
              '    font-family: inherit;\n' +
              '    line-height: 1.25rem;\n' +
              '    word-spacing: normal;\n' +
              '    letter-spacing: normal;\n' +
              '    color: #4B5563;\n' +
              '    display: flex;\n' +
              '    align-items: center;\n' +
              '    margin-left: 1.25rem;\n' +
              '    margin-right: 1.25rem;\n' +
              '    text-decoration: none;\n' +
              '    opacity: 1;\n' +
              '  }\n' +
              '  .social {\n' +
              '    display: flex;\n' +
              '    justify-content: center;\n' +
              '    align-items: center;\n' +
              '    margin-right: 15%;\n' +
              '    color: black;\n' +
              '    margin-left: auto;\n' +
              '  }\n' +
              '  .icons {\n' +
              '    margin-left: 1rem;\n' +
              '  }\n' +
              '  .img-circle {\n' +
              '    width: 35px;\n' +
              '    height: 35px;\n' +
              '    display: flex;\n' +
              '    justify-content: center;\n' +
              '    align-items: center;\n' +
              '    margin: 1rem 1rem 1rem 15%;\n' +
              '    background: #6366f1;\n' +
              '    border: 3px solid transparent;\n' +
              '    border-radius: 5rem;\n' +
              '  }\n' +
              '  .img-text {\n' +
              '    opacity: 1;\n' +
              '    font-size: 1.25rem;\n' +
              '    font-weight: 500;\n' +
              '    font-family: inherit;\n' +
              '    color: #111827;\n' +
              '    line-height: 1.75rem;\n' +
              '    margin-right: 1.25rem;\n' +
              '    display: flex;\n' +
              '    align-items: center;\n' +
              '    border-right: solid #e5e7eb;\n' +
              '    border-width: thin;\n' +
              '    padding-right: 2rem;\n' +
              '  }\n' +
              '.link-container {\n' +
              '  flex: 1 0 25%;\n' +
              '  display: flex;\n' +
              '  flex-direction: column;\n' +
              '  justify-content: center;\n' +
              '  align-items: center\n' +
              '}\n' +
              '.header-link-text {\n' +
              '  color: #111827;\n' +
              '  letter-spacing: 0.1em;\n' +
              '  line-height: 1.25rem;\n' +
              '  font-weight: 500;\n' +
              '  font-family: "Segoe UI";\n' +
              '  opacity: 1;\n' +
              '}\n' +
              '.link-text {\n' +
              '  font-size: 1.15rem;\n' +
              '  font-weight: 500;\n' +
              '  color: #4B5563;\n' +
              '  line-height: 1.5rem;\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '  margin-right: 1.25rem;\n' +
              '  text-decoration: none;\n' +
              '  font-family: "ui-sans-serif";\n' +
              '}\n' +
              '.btn {\n' +
              '  display: flex;\n' +
              '  justify-content: center;\n' +
              '  align-items: center;\n' +
              '  margin-left: 1rem;\n' +
              '}\n' +
              '.btn-style {\n' +
              '  font-weight: 500;\n' +
              '  line-height: 1.25rem;\n' +
              '  font-size: 1rem;\n' +
              '  background: #6366f1;\n' +
              '  color: white;\n' +
              '  border: 3px solid transparent;\n' +
              '  border-radius: 0.25rem;\n' +
              '  text-align: center;\n' +
              '  padding-inline: 6px;\n' +
              '  letter-spacing: normal;\n' +
              '  text-shadow: none;\n' +
              '  word-spacing: normal;\n' +
              '  opacity: 1;\n' +
              '}\n' +
              '</style>\n' +
              '<footer style="width: 100%">\n' +
              '  <div style="display: flex; justify-content: center; align-items: center; margin: 5rem">\n' +
              '    <div class="link-container">\n' +
              '      <div>\n' +
              '        <p class="header-link-text">CATEGORIES</p>\n' +
              '        <a class="link-text">First Link</a>\n' +
              '        <a class="link-text">Second Link</a>\n' +
              '        <a class="link-text">Third Link</a>\n' +
              '        <a class="link-text">Fourth Link</a>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '    <div class="link-container">\n' +
              '      <div>\n' +
              '        <p class="header-link-text">CATEGORIES</p>\n' +
              '        <a class="link-text">First Link</a>\n' +
              '        <a class="link-text">Second Link</a>\n' +
              '        <a class="link-text">Third Link</a>\n' +
              '        <a class="link-text">Fourth Link</a>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '    <div class="link-container">\n' +
              '      <div>\n' +
              '        <p class="header-link-text">CATEGORIES</p>\n' +
              '        <a class="link-text">First Link</a>\n' +
              '        <a class="link-text">Second Link</a>\n' +
              '        <a class="link-text">Third Link</a>\n' +
              '        <a class="link-text">Fourth Link</a>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '    <div class="link-container">\n' +
              '      <div>\n' +
              '        <p class="header-link-text">SUBSCRIBE</p>\n' +
              '        <p>Placeholder</p>\n' +
              '        <div style="display: flex; flex-direction: row">\n' +
              '          <input placeholder="" type="text">\n' +
              '          <div class="btn">\n' +
              '            <button class="btn-style">\n' +
              '              Button\n' +
              '            </button>\n' +
              '          </div>\n' +
              '        </div>\n' +
              '        <p class="link-text" style="width: auto; height: auto">Bitters chicharrones fanny pack<br>waistcoat green juice</p>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '  <div style="display: flex; flex-direction: row; background: #F3F4F6">\n' +
              '    <div class="img-circle">\n' +
              '      <svg viewBox="-0.25 -0.25 24 24" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11.945833333333333 11.175229166666666a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 6.813041666666667a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667L11.554166666666667 1.5539375a0.4895833333333333 0.4895833333333333 0 0 1 0.39166666666666666 0l10.0315625 4.3621875a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path><path d="m20.1953125 10.526041666666666 1.7820833333333332 0.7755a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667L11.945833333333333 16.560645833333332a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 12.198458333333333a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667l1.7820833333333332 -0.7755" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path><path d="m20.1953125 15.911458333333332 1.7820833333333332 0.7755a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667L11.945833333333333 21.9460625a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 17.583875a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667l1.7820833333333332 -0.7755" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path></svg>\n' +
              '    </div>\n' +
              '    <p class="img-text"><b>Label</b></p>\n' +
              '    <p class="footer-text">2023 Label</p>\n' +
              '    <div class="social">\n' +
              '      <div>\n' +
              '        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><path fill="#000000" d="M13.5 1A4.5 4.5 0 0 0 9 5.5V9H6.5a0.5 0.5 0 0 0 -0.5 0.5v4a0.5 0.5 0 0 0 0.5 0.5H9v8.5a0.5 0.5 0 0 0 0.5 0.5h4a0.5 0.5 0 0 0 0.5 -0.5V14h2.5a0.5 0.5 0 0 0 0.485 -0.379l1 -4A0.5 0.5 0 0 0 17.5 9H14V7.5A1.5 1.5 0 0 1 15.5 6h2a0.5 0.5 0 0 0 0.5 -0.5v-4a0.5 0.5 0 0 0 -0.5 -0.5h-4Z" stroke-width="1"></path></svg>\n' +
              '      </div>\n' +
              '      <div class="icons">\n' +
              '        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><path fill="#000000" d="M1 19c15.617 6.062 20.038 -5.025 19.905 -10.5C22.173 8.156 23 7.292 23 6.406c-1.048 0.55 -1.595 0.394 -2.119 0 1.128 -0.768 1.071 -1.863 1.071 -2.619 -0.527 0.277 -1.503 0.96 -2.619 1.048 -0.745 -1.166 -2.619 -2.095 -5.238 -1.048 -2.619 1.048 -3.143 3.842 -2.619 5.238 -3.352 0 -7.333 -3.492 -8.905 -5.238 -1.883 2.688 0.5 5.353 1.572 6.286 -0.715 0.214 -1.572 0 -2.095 -0.524 0 2.991 2.619 4.19 3.666 4.715H3.62c0 2.095 2.444 2.968 3.667 3.142 -0.838 0.838 -4.215 1.596 -6.286 1.596Z" stroke-width="1"></path></svg>\n' +
              '      </div>\n' +
              '      <div class="icons">\n' +
              '        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><g id="instagram"><path id="Subtract" fill="#000" fill-rule="evenodd" d="M5.811428571428571 1.3491428571428572A4.4639999999999995 4.4639999999999995 0 0 0 1.3474285714285714 5.811428571428571v11.904a4.4639999999999995 4.4639999999999995 0 0 0 4.4639999999999995 4.4639999999999995h11.904a4.4639999999999995 4.4639999999999995 0 0 0 4.462285714285715 -4.4639999999999995V5.811428571428571A4.4639999999999995 4.4639999999999995 0 0 0 17.71542857142857 1.3491428571428572H5.811428571428571Zm13.187999999999999 4.469142857142857a1.2857142857142856 1.2857142857142856 0 1 1 -2.571428571428571 0 1.2857142857142856 1.2857142857142856 0 0 1 2.571428571428571 0Zm-7.234285714285713 2.379428571428571a3.565714285714286 3.565714285714286 0 1 0 0 7.131428571428572 3.565714285714286 3.565714285714286 0 0 0 0 -7.131428571428572Zm-5.281714285714285 3.565714285714286a5.28 5.28 0 1 1 10.56 0 5.28 5.28 0 0 1 -10.56 0Z" clip-rule="evenodd" stroke-width="1.7142857142857142"></path></g></svg>\n' +
              '      </div>\n' +
              '      <div class="icons">\n' +
              '        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><path fill="#000000" fill-rule="evenodd" d="M12 23c6.075 0 11 -4.925 11 -11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11ZM4.982 11.175c0 -0.102 0.067 -0.198 0.162 -0.234l12.324 -4.697a0.254 0.254 0 0 1 0.254 0.046c0.068 0.06 0.1 0.157 0.078 0.246l-2.458 10.338a0.254 0.254 0 0 1 -0.156 0.177 0.253 0.253 0 0 1 -0.234 -0.032l-2.619 -1.895 -0.1 0.066a157.1 157.1 0 0 1 -1.196 0.788 46.23 46.23 0 0 1 -0.943 0.6 9.536 9.536 0 0 1 -0.352 0.207 2.277 2.277 0 0 1 -0.14 0.072 0.93 0.93 0 0 1 -0.078 0.033 0.716 0.716 0 0 1 -0.722 -0.165 0.775 0.775 0 0 1 -0.202 -0.394l-0.001 -0.005 -0.803 -3.949 -2.652 -0.968a0.255 0.255 0 0 1 -0.162 -0.234Zm3.792 0.993 0.727 3.577 0.81 -2.463 4.142 -3.715a0.154 0.154 0 0 0 0.023 -0.196 0.154 0.154 0 0 0 -0.19 -0.05l-5.512 2.847Z" clip-rule="evenodd" stroke-width="1"></path></svg>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</footer>\n',
            category: 'Footer',
            media: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><g id="dashboard-circle--app-application-dashboard-home-layout-circle"><path id="Union" fill="#000" fill-rule="evenodd" d="M10.285714285714285 5.142857142857142a5.142857142857142 5.142857142857142 0 1 1 -10.285714285714285 0 5.142857142857142 5.142857142857142 0 0 1 10.285714285714285 0Zm13.714285714285714 0a5.142857142857142 5.142857142857142 0 1 1 -10.285714285714285 0 5.142857142857142 5.142857142857142 0 0 1 10.285714285714285 0ZM5.142857142857142 24a5.142857142857142 5.142857142857142 0 1 0 0 -10.285714285714285 5.142857142857142 5.142857142857142 0 0 0 0 10.285714285714285Zm18.857142857142858 -5.142857142857142a5.142857142857142 5.142857142857142 0 1 1 -10.285714285714285 0 5.142857142857142 5.142857142857142 0 0 1 10.285714285714285 0Z" clip-rule="evenodd" stroke-width="1.7142857142857142"></path></g></svg>'
          },
          {
            id: 'footer-4',
            label: 'Footer-4',
            content: '<style>\n' +
              '  .footer-text {\n' +
              '    font-size: 1rem;\n' +
              '    font-weight: 500;\n' +
              '    font-family: inherit;\n' +
              '    line-height: 1.25rem;\n' +
              '    word-spacing: normal;\n' +
              '    letter-spacing: normal;\n' +
              '    color: #4B5563;\n' +
              '    display: flex;\n' +
              '    align-items: center;\n' +
              '    margin-left: 1.25rem;\n' +
              '    margin-right: 1.25rem;\n' +
              '    text-decoration: none;\n' +
              '    opacity: 1;\n' +
              '  }\n' +
              '  .social {\n' +
              '    display: flex;\n' +
              '    justify-content: center;\n' +
              '    align-items: center;\n' +
              '    margin-right: 15%;\n' +
              '    color: black;\n' +
              '    margin-left: auto;\n' +
              '  }\n' +
              '  .icons {\n' +
              '    margin-left: 1rem;\n' +
              '  }\n' +
              '  .img-circle {\n' +
              '    width: 35px;\n' +
              '    height: 35px;\n' +
              '    display: flex;\n' +
              '    justify-content: center;\n' +
              '    align-items: center;\n' +
              '    margin: 1rem 1rem 1rem 15%;\n' +
              '    background: #6366f1;\n' +
              '    border: 3px solid transparent;\n' +
              '    border-radius: 5rem;\n' +
              '  }\n' +
              '  .img-text {\n' +
              '    opacity: 1;\n' +
              '    font-size: 1.25rem;\n' +
              '    font-weight: 500;\n' +
              '    font-family: inherit;\n' +
              '    color: #111827;\n' +
              '    line-height: 1.75rem;\n' +
              '    margin-right: 1.25rem;\n' +
              '    display: flex;\n' +
              '    align-items: center;\n' +
              '    border-right: solid #e5e7eb;\n' +
              '    border-width: thin;\n' +
              '    padding-right: 2rem;\n' +
              '  }\n' +
              '.link-container {\n' +
              '  flex: 1 0 16.67%;\n' +
              '  display: flex;\n' +
              '  flex-direction: column;\n' +
              '  justify-content: center;\n' +
              '  align-items: center\n' +
              '}\n' +
              '.header-link-text {\n' +
              '  color: #111827;\n' +
              '  letter-spacing: 0.1em;\n' +
              '  line-height: 1.25rem;\n' +
              '  font-weight: 500;\n' +
              '  font-family: "Segoe UI";\n' +
              '  opacity: 1;\n' +
              '}\n' +
              '.link-text {\n' +
              '  font-size: 1.15rem;\n' +
              '  font-weight: 500;\n' +
              '  color: #4B5563;\n' +
              '  line-height: 1.5rem;\n' +
              '  display: flex;\n' +
              '  align-items: center;\n' +
              '  margin-right: 1.25rem;\n' +
              '  text-decoration: none;\n' +
              '  font-family: "ui-sans-serif";\n' +
              '}\n' +
              '</style>\n' +
              '<footer style="width: 100%">\n' +
              '  <div style="display: flex; justify-content: center; align-items: center; margin: 5rem">\n' +
              '    <div class="link-container">\n' +
              '      <div>\n' +
              '        <p class="header-link-text">CATEGORIES</p>\n' +
              '        <a class="link-text">First Link</a>\n' +
              '        <a class="link-text">Second Link</a>\n' +
              '        <a class="link-text">Third Link</a>\n' +
              '        <a class="link-text">Fourth Link</a>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '    <div class="link-container">\n' +
              '      <div>\n' +
              '        <p class="header-link-text">CATEGORIES</p>\n' +
              '        <a class="link-text">First Link</a>\n' +
              '        <a class="link-text">Second Link</a>\n' +
              '        <a class="link-text">Third Link</a>\n' +
              '        <a class="link-text">Fourth Link</a>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '    <div class="link-container">\n' +
              '      <div>\n' +
              '        <p class="header-link-text">CATEGORIES</p>\n' +
              '        <a class="link-text">First Link</a>\n' +
              '        <a class="link-text">Second Link</a>\n' +
              '        <a class="link-text">Third Link</a>\n' +
              '        <a class="link-text">Fourth Link</a>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '    <div class="link-container">\n' +
              '      <div>\n' +
              '        <p class="header-link-text">CATEGORIES</p>\n' +
              '        <a class="link-text">First Link</a>\n' +
              '        <a class="link-text">Second Link</a>\n' +
              '        <a class="link-text">Third Link</a>\n' +
              '        <a class="link-text">Fourth Link</a>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '    <div class="link-container">\n' +
              '      <div>\n' +
              '        <p class="header-link-text">CATEGORIES</p>\n' +
              '        <a class="link-text">First Link</a>\n' +
              '        <a class="link-text">Second Link</a>\n' +
              '        <a class="link-text">Third Link</a>\n' +
              '        <a class="link-text">Fourth Link</a>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '    <div class="link-container">\n' +
              '      <div>\n' +
              '        <p class="header-link-text">CATEGORIES</p>\n' +
              '        <a class="link-text">First Link</a>\n' +
              '        <a class="link-text">Second Link</a>\n' +
              '        <a class="link-text">Third Link</a>\n' +
              '        <a class="link-text">Fourth Link</a>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '  <div style="display: flex; flex-direction: row; background: #F3F4F6">\n' +
              '    <div class="img-circle">\n' +
              '      <svg viewBox="-0.25 -0.25 24 24" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11.945833333333333 11.175229166666666a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 6.813041666666667a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667L11.554166666666667 1.5539375a0.4895833333333333 0.4895833333333333 0 0 1 0.39166666666666666 0l10.0315625 4.3621875a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path><path d="m20.1953125 10.526041666666666 1.7820833333333332 0.7755a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667L11.945833333333333 16.560645833333332a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 12.198458333333333a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667l1.7820833333333332 -0.7755" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path><path d="m20.1953125 15.911458333333332 1.7820833333333332 0.7755a0.4895833333333333 0.4895833333333333 0 0 1 0 0.8969166666666667L11.945833333333333 21.9460625a0.4895833333333333 0.4895833333333333 0 0 1 -0.39166666666666666 0L1.5226041666666665 17.583875a0.4895833333333333 0.4895833333333333 0 0 1 0 -0.8969166666666667l1.7820833333333332 -0.7755" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"></path></svg>\n' +
              '    </div>\n' +
              '    <p class="img-text"><b>Label</b></p>\n' +
              '    <p class="footer-text">2023 Label</p>\n' +
              '    <div class="social">\n' +
              '      <div>\n' +
              '        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><path fill="#000000" d="M13.5 1A4.5 4.5 0 0 0 9 5.5V9H6.5a0.5 0.5 0 0 0 -0.5 0.5v4a0.5 0.5 0 0 0 0.5 0.5H9v8.5a0.5 0.5 0 0 0 0.5 0.5h4a0.5 0.5 0 0 0 0.5 -0.5V14h2.5a0.5 0.5 0 0 0 0.485 -0.379l1 -4A0.5 0.5 0 0 0 17.5 9H14V7.5A1.5 1.5 0 0 1 15.5 6h2a0.5 0.5 0 0 0 0.5 -0.5v-4a0.5 0.5 0 0 0 -0.5 -0.5h-4Z" stroke-width="1"></path></svg>\n' +
              '      </div>\n' +
              '      <div class="icons">\n' +
              '        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><path fill="#000000" d="M1 19c15.617 6.062 20.038 -5.025 19.905 -10.5C22.173 8.156 23 7.292 23 6.406c-1.048 0.55 -1.595 0.394 -2.119 0 1.128 -0.768 1.071 -1.863 1.071 -2.619 -0.527 0.277 -1.503 0.96 -2.619 1.048 -0.745 -1.166 -2.619 -2.095 -5.238 -1.048 -2.619 1.048 -3.143 3.842 -2.619 5.238 -3.352 0 -7.333 -3.492 -8.905 -5.238 -1.883 2.688 0.5 5.353 1.572 6.286 -0.715 0.214 -1.572 0 -2.095 -0.524 0 2.991 2.619 4.19 3.666 4.715H3.62c0 2.095 2.444 2.968 3.667 3.142 -0.838 0.838 -4.215 1.596 -6.286 1.596Z" stroke-width="1"></path></svg>\n' +
              '      </div>\n' +
              '      <div class="icons">\n' +
              '        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><g id="instagram"><path id="Subtract" fill="#000" fill-rule="evenodd" d="M5.811428571428571 1.3491428571428572A4.4639999999999995 4.4639999999999995 0 0 0 1.3474285714285714 5.811428571428571v11.904a4.4639999999999995 4.4639999999999995 0 0 0 4.4639999999999995 4.4639999999999995h11.904a4.4639999999999995 4.4639999999999995 0 0 0 4.462285714285715 -4.4639999999999995V5.811428571428571A4.4639999999999995 4.4639999999999995 0 0 0 17.71542857142857 1.3491428571428572H5.811428571428571Zm13.187999999999999 4.469142857142857a1.2857142857142856 1.2857142857142856 0 1 1 -2.571428571428571 0 1.2857142857142856 1.2857142857142856 0 0 1 2.571428571428571 0Zm-7.234285714285713 2.379428571428571a3.565714285714286 3.565714285714286 0 1 0 0 7.131428571428572 3.565714285714286 3.565714285714286 0 0 0 0 -7.131428571428572Zm-5.281714285714285 3.565714285714286a5.28 5.28 0 1 1 10.56 0 5.28 5.28 0 0 1 -10.56 0Z" clip-rule="evenodd" stroke-width="1.7142857142857142"></path></g></svg>\n' +
              '      </div>\n' +
              '      <div class="icons">\n' +
              '        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><path fill="#000000" fill-rule="evenodd" d="M12 23c6.075 0 11 -4.925 11 -11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11ZM4.982 11.175c0 -0.102 0.067 -0.198 0.162 -0.234l12.324 -4.697a0.254 0.254 0 0 1 0.254 0.046c0.068 0.06 0.1 0.157 0.078 0.246l-2.458 10.338a0.254 0.254 0 0 1 -0.156 0.177 0.253 0.253 0 0 1 -0.234 -0.032l-2.619 -1.895 -0.1 0.066a157.1 157.1 0 0 1 -1.196 0.788 46.23 46.23 0 0 1 -0.943 0.6 9.536 9.536 0 0 1 -0.352 0.207 2.277 2.277 0 0 1 -0.14 0.072 0.93 0.93 0 0 1 -0.078 0.033 0.716 0.716 0 0 1 -0.722 -0.165 0.775 0.775 0 0 1 -0.202 -0.394l-0.001 -0.005 -0.803 -3.949 -2.652 -0.968a0.255 0.255 0 0 1 -0.162 -0.234Zm3.792 0.993 0.727 3.577 0.81 -2.463 4.142 -3.715a0.154 0.154 0 0 0 0.023 -0.196 0.154 0.154 0 0 0 -0.19 -0.05l-5.512 2.847Z" clip-rule="evenodd" stroke-width="1"></path></svg>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</footer>',
            category: 'Footer',
            media: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><g id="dashboard-circle--app-application-dashboard-home-layout-circle"><path id="Union" fill="#000" fill-rule="evenodd" d="M10.285714285714285 5.142857142857142a5.142857142857142 5.142857142857142 0 1 1 -10.285714285714285 0 5.142857142857142 5.142857142857142 0 0 1 10.285714285714285 0Zm13.714285714285714 0a5.142857142857142 5.142857142857142 0 1 1 -10.285714285714285 0 5.142857142857142 5.142857142857142 0 0 1 10.285714285714285 0ZM5.142857142857142 24a5.142857142857142 5.142857142857142 0 1 0 0 -10.285714285714285 5.142857142857142 5.142857142857142 0 0 0 0 10.285714285714285Zm18.857142857142858 -5.142857142857142a5.142857142857142 5.142857142857142 0 1 1 -10.285714285714285 0 5.142857142857142 5.142857142857142 0 0 1 10.285714285714285 0Z" clip-rule="evenodd" stroke-width="1.7142857142857142"></path></g></svg>'
          },
          // place for gallery and hero layering
          {
            id: 'pricing-1',
            label: 'Pricing-1',
            content: '<style>\n' +
              '  th {\n' +
              '    background: #e5e7eb;\n' +
              '  }\n' +
              '  td {\n' +
              '    background: #f3f4f6;\n' +
              '  }\n' +
              '  .header-text {\n' +
              '    font-size: 1.875rem;\n' +
              '    margin-bottom: 0rem;\n' +
              '    display: flex;\n' +
              '    justify-content: center;\n' +
              '  }\n' +
              '  .header-desc-style {\n' +
              '    margin-left: auto;\n' +
              '    margin-right: auto;\n' +
              '    color: #4B5563;\n' +
              '    line-height: 1.625;\n' +
              '    font-size: 1.25rem;\n' +
              '    text-align: center;\n' +
              '  }\n' +
              '  .container {\n' +
              '    padding: 6rem 1.25rem;\n' +
              '    margin-left: auto;\n' +
              '    margin-right: auto;\n' +
              '  }\n' +
              '  .header-table {\n' +
              '    padding: 0.75rem 1rem;\n' +
              '    text-transform: uppercase;\n' +
              '    font-weight: 500;\n' +
              '    font-size: 0.875rem;\n' +
              '    color: #374151;\n' +
              '    background-color: #f3f4f6;\n' +
              '  }\n' +
              '  .first-row {\n' +
              '    padding: 0.75rem 1rem;\n' +
              '  }\n' +
              '  .second-row {\n' +
              '    border-top-width: 2px;\n' +
              '    border-color: grey;\n' +
              '    padding: 0.75rem 1rem;\n' +
              '  }\n' +
              '  .third-row {\n' +
              '    border-top-width: 2px;\n' +
              '    border-color: grey;\n' +
              '    padding: 0.75rem 1rem;\n' +
              '  }\n' +
              '  .fourth-row {\n' +
              '    border-top-width: 2px;\n' +
              '    border-bottom-width: 2px;\n' +
              '    border-color: grey;\n' +
              '    padding: 0.75rem 1rem;\n' +
              '  }\n' +
              '</style>\n' +
              '<section>\n' +
              '  <div class="container">\n' +
              '    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">\n' +
              '      <h1 class="header-text">Pricing</h1>\n' +
              '      <p class="header-desc-style">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore<br>3 wolf moon twee</p>\n' +
              '    </div>\n' +
              '    <div style="max-width: 32rem; margin-left: auto; margin-right: auto; overflow-x: auto;">\n' +
              '      <table style="width: 100%; display: table; border-collapse: separate; border-spacing: 2px; border-color: grey;">\n' +
              '        <thead>\n' +
              '          <tr>\n' +
              '            <th class="header-table" style=" border-top-left-radius: 0.5rem; border-bottom-left-radius: 0.5rem;">Plan</th>\n' +
              '            <th class="header-table">Speed</th>\n' +
              '            <th class="header-table">Storage</th>\n' +
              '            <th class="header-table">Price</th>\n' +
              '            <th style="width: 2.5rem; padding-top: 0.75rem; padding-bottom: 0.75rem; text-transform: uppercase; font-weight: 500; font-size: 0.875rem; color: #374151; background-color: #f3f4f6; border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem;"></th>\n' +
              '          </tr>\n' +
              '        </thead>\n' +
              '        <tbody>\n' +
              '          <tr>\n' +
              '            <td class="first-row">Start</td>\n' +
              '            <td class="first-row">5 Mb/s</td>\n' +
              '            <td class="first-row">15 GB</td>\n' +
              '            <td class="first-row" style="font-size: 1.125rem; color: #374151;">Free</td>\n' +
              '            <td style="width: 2.5rem; padding-top: 0.75rem; padding-bottom: 0.75rem; text-align: center;">\n' +
              '              <input name="plan" type="radio">\n' +
              '            </td>\n' +
              '          </tr>\n' +
              '          <tr>\n' +
              '            <td class="second-row">Pro</td>\n' +
              '            <td class="second-row">25 Mb/s</td>\n' +
              '            <td class="second-row">25 GB</td>\n' +
              '            <td class="second-row" style="font-size: 1.125rem; color: #374151;">$24</td>\n' +
              '            <td class="second-row" style="padding-bottom: 0.75rem; text-align: center;">\n' +
              '              <input name="plan" type="radio">\n' +
              '            </td>\n' +
              '          </tr>\n' +
              '          <tr>\n' +
              '            <td class="third-row">Business</td>\n' +
              '            <td class="third-row">36 Mb/s</td>\n' +
              '            <td class="third-row">40 GB</td>\n' +
              '            <td class="third-row" style="font-size: 1.125rem; color: #374151;">$50</td>\n' +
              '            <td style="border-top-width: 2px; border-color: grey; padding-top: 0.75rem; padding-bottom: 0.75rem; text-align: center;">\n' +
              '              <input name="plan" type="radio">\n' +
              '            </td>\n' +
              '          </tr>\n' +
              '          <tr>\n' +
              '            <td class="fourth-row">Exclusive</td>\n' +
              '            <td class="fourth-row">48 Mb/s</td>\n' +
              '            <td class="fourth-row">120 GB</td>\n' +
              '            <td class="fourth-row" style="font-size: 1.125rem; color: #374151;">$72</td>\n' +
              '            <td style="border-top-width: 2px; border-bottom-width: 2px; border-color: grey; padding-top: 0.75rem; padding-bottom: 0.75rem; text-align: center;">\n' +
              '              <input name="plan" type="radio">\n' +
              '            </td>\n' +
              '          </tr>\n' +
              '        </tbody>\n' +
              '      </table>\n' +
              '    </div>\n' +
              '    <div style="padding-left: 1rem; max-width: 32rem; margin: 1rem auto; display: flex">\n' +
              '      <a style="color: #6366f1; align-items: center; display: inline-flex;">Learn More\n' +
              '        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="width: 1rem; height: 1rem; margin-left: 0.5rem;" class="w-4 h-4 ml-2" viewBox="0 0 24 24">\n' +
              '          <path d="M5 12h14M12 5l7 7-7 7"></path>\n' +
              '        </svg>\n' +
              '      </a>\n' +
              '      <button style="margin-left: auto; color: #fff; background-color: #6366f1; border-width: 0; padding: 0.5rem 1.5rem;outline: none; transition: background-color 0.3s ease 0s; border-radius: 0.375rem;">Button</button>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</section>\n',
            category: 'Pricing',
            media: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24"><g id="tag--tags-bookmark-favorite"><path id="Subtract" fill="#000" fill-rule="evenodd" d="M15.034285714285712 0.005142857142857143a1.4742857142857142 1.4742857142857142 0 0 0 -1.1794285714285713 0.4422857142857143L0.6257142857142857 13.676571428571428a2.142857142857143 2.142857142857143 0 0 0 0 3.029142857142857l6.668571428571428 6.668571428571428a2.142857142857143 2.142857142857143 0 0 0 3.0308571428571427 0l13.227428571428572 -13.229142857142856a1.4742857142857142 1.4742857142857142 0 0 0 0.4354285714285714 -1.2394285714285713l-1.0062857142857142 -6.531428571428571a1.4914285714285713 1.4914285714285713 0 0 0 -1.3542857142857143 -1.356L15.095999999999998 0.012A0.8571428571428571 0.8571428571428571 0 0 0 15.034285714285712 0.005142857142857143ZM17.142857142857142 8.571428571428571a1.7142857142857142 1.7142857142857142 0 1 1 0 -3.4285714285714284 1.7142857142857142 1.7142857142857142 0 0 1 0 3.4285714285714284Z" clip-rule="evenodd" stroke-width="1.7142857142857142"></path></g></svg>'
          },
          {
            id: 'statistic-1',
            label: 'Statistic-1',
            content: '<style>\n' +
              '.container {\n' +
              '  display: flex;\n' +
              '  flex-direction: row;\n' +
              '  justify-content: center;\n' +
              '  align-items: center;\n' +
              '  margin-top: 5rem;\n' +
              '}\n' +
              '.flex-container {\n' +
              '  flex: 1 0 15%;\n' +
              '  display: flex;\n' +
              '  flex-direction: column;\n' +
              '  align-items: center\n' +
              '}\n' +
              '.category-text {\n' +
              '  color: #6B7280;\n' +
              '  font-size: 1rem;\n' +
              '  line-height: 0.5rem;\n' +
              '  letter-spacing: 0.05rem;\n' +
              '  font-family: "Segoe UI";\n' +
              '  text-align: center;\n' +
              '  -webkit-font-smoothing: antialiased;\n' +
              '}\n' +
              '.item-text {\n' +
              '  font-family: "Times New Roman";\n' +
              '  line-height: 0.5rem;\n' +
              '  letter-spacing: 0.05rem;\n' +
              '  -webkit-font-smoothing: antialiased;\n' +
              '  text-align: center;\n' +
              '}\n' +
              '</style>\n' +
              '<div style="width: 100%; margin-top: 5rem;">\n' +
              '  <div class="container">\n' +
              '    <div class="flex-container">\n' +
              '      <div>\n' +
              '        <h1 class="item-text"><b>2.7K</b></h1>\n' +
              '        <p class="category-text">Users</p>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '    <div class="flex-container">\n' +
              '      <div>\n' +
              '        <h1 class="item-text"><b>1.8K</b></h1>\n' +
              '        <p class="category-text">Subs</p>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '    <div class="flex-container">\n' +
              '      <div>\n' +
              '        <h1 class="item-text"><b>35</b></h1>\n' +
              '        <p class="category-text">Downloads</p>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '    <div class="flex-container">\n' +
              '      <div>\n' +
              '        <h1 class="item-text"><b>4</b></h1>\n' +
              '        <p class="category-text">Items</p>\n' +
              '      </div>\n' +
              '    </div>\n' +
              '  </div>\n' +
              '</div>\n',
            category: 'Statistic',
            media: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 24 24" height="24" width="24"><path stroke="#000000" d="M18.208333333333336 1.4375H4.791666666666667a2.875 2.875 0 0 0 -2.875 2.875v14.375a2.875 2.875 0 0 0 2.875 2.875h13.416666666666668a2.875 2.875 0 0 0 2.875 -2.875v-14.375a2.875 2.875 0 0 0 -2.875 -2.875Z" stroke-width="1"></path><path stroke="#000000" stroke-linejoin="round" d="M18.208333333333336 6.229166666666667V19.166666666666668" stroke-width="1"></path><path stroke="#000000" stroke-linejoin="round" d="M15.525 11.979166666666668V19.166666666666668" stroke-width="1"></path><path stroke="#000000" stroke-linejoin="round" d="M4.791666666666667 14.854166666666668V19.166666666666668" stroke-width="1"></path><path stroke="#000000" stroke-linejoin="round" d="M7.4750000000000005 11.020833333333334V19.166666666666668" stroke-width="1"></path><path stroke="#000000" stroke-linejoin="round" d="M10.158333333333333 13.416666666666668v5.75" stroke-width="1"></path><path stroke="#000000" stroke-linejoin="round" d="M12.841666666666667 9.104166666666668V19.166666666666668" stroke-width="1"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M6.708333333333334 3.8333333333333335h9.583333333333334" stroke-width="1"></path></svg>'
          },
          {
            id: 'step-1',
            label: 'Step-1',
            content: '',
            category: 'Step',
            media: ''
          },
          {
            id: 'team-1',
            label: 'Team-1',
            content: '',
            category: 'Team',
            media: ''
          },
          {
            id: 'testimonial-1',
            label: 'Testimonial-1',
            content: '',
            category: 'Testimonial',
            media: ''
          }
        ],
      },
    });
  }
}

