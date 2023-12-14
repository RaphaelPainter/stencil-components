/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IngredientCard {
        "imageSrc": string;
        "name": string;
        "targetUrl": string;
    }
    interface IngredientGrid {
        "ingredients": string;
    }
}
declare global {
    interface HTMLIngredientCardElement extends Components.IngredientCard, HTMLStencilElement {
    }
    var HTMLIngredientCardElement: {
        prototype: HTMLIngredientCardElement;
        new (): HTMLIngredientCardElement;
    };
    interface HTMLIngredientGridElement extends Components.IngredientGrid, HTMLStencilElement {
    }
    var HTMLIngredientGridElement: {
        prototype: HTMLIngredientGridElement;
        new (): HTMLIngredientGridElement;
    };
    interface HTMLElementTagNameMap {
        "ingredient-card": HTMLIngredientCardElement;
        "ingredient-grid": HTMLIngredientGridElement;
    }
}
declare namespace LocalJSX {
    interface IngredientCard {
        "imageSrc"?: string;
        "name"?: string;
        "targetUrl"?: string;
    }
    interface IngredientGrid {
        "ingredients"?: string;
    }
    interface IntrinsicElements {
        "ingredient-card": IngredientCard;
        "ingredient-grid": IngredientGrid;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ingredient-card": LocalJSX.IngredientCard & JSXBase.HTMLAttributes<HTMLIngredientCardElement>;
            "ingredient-grid": LocalJSX.IngredientGrid & JSXBase.HTMLAttributes<HTMLIngredientGridElement>;
        }
    }
}
