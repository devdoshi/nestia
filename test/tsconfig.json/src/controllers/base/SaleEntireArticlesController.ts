import * as helper from "encrypted-nestjs";
import * as nest from "@nestjs/common";

import { IPage } from "../../../../nestia.config.ts/src/api/structures/common/IPage";
import { ISaleEntireArtcle } from "../../api/structures/sales/articles/ISaleEntireArticle";

export abstract class SaleEntireArticlesController
{
    @helper.EncryptedRoute.Get()
    public async index
        (
            @helper.TypedParam("section", "string") section: string, 
            @helper.TypedParam("saleId", "number") saleId: number, 
            @nest.Query() input: IPage.IRequest
        ): Promise<IPage<ISaleEntireArtcle.ISummary>>
    {
        return null!;
    }

    @helper.EncryptedRoute.Get(":id")
    public async at
        (
            @helper.TypedParam("section", "string") section: string, 
            @helper.TypedParam("saleId", "number") saleId: number, 
            @helper.TypedParam("id", "number") id: number
        ): Promise<ISaleEntireArtcle>
    {
        return null!;
    }
}