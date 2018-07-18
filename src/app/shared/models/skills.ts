import { Category } from './category';
import { Speciality } from './speciality';

/**
 * Models the get skills details from firestore
 */
export class Skills {
    caption: string;
    subTitle: string;
    specialities: Array<Speciality>;
    webDesign: Category;
    uiDesign: Category;
    frontEnd: Category;
    backEnd: Category;
}
