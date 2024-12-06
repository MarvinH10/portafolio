import 'jquery';

declare global {
    interface JQuery {
        ripples(options: {
            resolution: number;
            dropRadius: number;
            perturbance: number;
        }): JQuery;
        ripples(method: "destroy" | "drop", ...args: unknown[]): JQuery;
        on(event: "mousemove", handler: (event: MouseEvent) => void): JQuery;
    }

    interface Window {
        jQuery: typeof import('jquery');
    }
}
