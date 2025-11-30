export class BreadcrumbPart {

    public url: string
    public text: string

    constructor(
        url: string,
        text: string,
    ) {
        this.url = url
        this.text = text
    }
}
