import { expect, Locator,BrowserContext, Page } from '@playwright/test';


let page:Page;
let context: BrowserContext;
let plansElement = '.lsux-heading.mx-auto.lsux-heading--t26';
let plansTxt = 'Plans';

export class BasePage{
    context: BrowserContext
    page:Page;
    constructor(page:Page){
        this.page = page;
        this.context = context;
    }
    
    goTo  = async  (url:string):Promise<void>  => {
        await this.page.goto(url, { waitUntil: 'networkidle' });
    }

    isElementVisible = async (ele:string):Promise<boolean> => {
         let visibility = await this.page.isVisible(ele);
         return visibility;
    }

    clickOnElement = async (ele:string):Promise<void> => {
         await this.page.locator(ele).click();
    }

    fillTextBox = async (ele:string, txt:string):Promise<void> => {
        await this.page.fill(ele, txt);
    }

    typeTextBox = async (ele:string, txt:string):Promise<void> => {
        await this.page.type(ele, txt);
    }

    keyboardTextBox = async (txt:string):Promise<void> => {
        await this.page.keyboard.insertText(txt);
    }

    assertElementHasText = async (ele:string,txt:string):Promise<void> => {
        await expect(this.page.locator(ele)).toHaveText(txt);
    }

    assertElementContainsText = async (selector:string,txt:string):Promise<void> => {
        let locator = this.page.locator(selector);
        await expect(locator).toContainText(txt);
    }

    assertUrl = async (page:Page, url:string) :Promise<void> => {
        await expect(page).toHaveURL(url);
    }

    assertElementIsVisible = async (ele:string) : Promise<void> => {
        const locator = this.page.locator(ele);
        await expect(locator).toBeVisible();
    }

    locateElement = async (ele:string) :Promise<void> => {
        await this.page.locator(ele);
    }

    createRandomInt = async (max = 10000): Promise<number> => {
        return Math.floor(Math.random() * max);
    }
    
    selectFromDropDownMenu = async (ele:string, label:string): Promise<void> => {
        await this.page.selectOption(ele, { label:label });
    }    
    
}

