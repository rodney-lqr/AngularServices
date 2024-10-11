import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Route, RouterModule} from "@angular/router";
import { StudentlistComponent } from "./components/studentlist/studentlist.component";
import {FormsModule} from "@angular/forms";
import {EmployeelistComponent} from "./components/employeelist/employeelist.component";
import {FruitlistComponent} from "./components/fruitlist/fruitlist.component";
import {CourselistComponent} from "./components/courselist/courselist.component";
import {BooklistComponent} from "./components/booklist/booklist.component";
import {CitylistComponent} from "./components/citylist/citylist.component";
import {MovielistComponent} from "./components/movielist/movielist.component";
import {CarmodellistComponent} from "./components/carmodellist/carmodellist.component";
import {ProductlistComponent} from "./components/productlist/productlist.component";
import {SubjectlistComponent} from "./components/subjectlist/subjectlist.component";
import {CountrylistComponent} from "./components/countrylist/countrylist.component";
import {SportslistComponent} from "./components/sportslist/sportslist.component";
import {VegetablelistComponent} from "./components/vegetablelist/vegetablelist.component";
import {AnimallistComponent} from "./components/animallist/animallist.component";
import {ToollistComponent} from "./components/toollist/toollist.component";
import {LanguagelistComponent} from "./components/languagelist/languagelist.component";
import {GamelistComponent} from "./components/gamelist/gamelist.component";
import {SoftwarelistComponent} from "./components/softwarelist/softwarelist.component";
import {PhonecontactlistComponent} from "./components/phonecontactlist/phonecontactlist.component";
import {MusicplaylistsComponent} from "./components/musicplaylists/musicplaylists.component";
import {FoodmenulistComponent} from "./components/foodmenulist/foodmenulist.component";
import {GrocerylistComponent} from "./components/grocerylist/grocerylist.component";
import {ClassroomlistComponent} from "./components/classroomlist/classroomlist.component";
import {InventorylistComponent} from "./components/inventorylist/inventorylist.component";
import {LecturelistComponent} from "./components/lecturelist/lecturelist.component";
import {StationerylistComponent} from "./components/stationerylist/stationerylist.component";
import {FlowerlistComponent} from "./components/flowerlist/flowerlist.component";
import {DestinationlistComponent} from "./components/destinationlist/destinationlist.component";
import {LaptoplistComponent} from "./components/laptoplist/laptoplist.component";
import {LaptopspecificationlistComponent} from "./components/laptopspecificationlist/laptopspecificationlist.component";
import {ComputerhardwarelistComponent} from "./components/computerhardwarelist/computerhardwarelist.component";
import {MobileapplistComponent} from "./components/mobileapplist/mobileapplist.component";
import {VideolistComponent} from "./components/videolist/videolist.component";
import {TvshowlistComponent} from "./components/tvshowlist/tvshowlist.component";
import {FurniturelistComponent} from "./components/furniturelist/furniturelist.component";
import {AccessorylistComponent} from "./components/accessorylist/accessorylist.component";
import {BuildinglistComponent} from "./components/buildinglist/buildinglist.component";
import {PaintinglistComponent} from "./components/paintinglist/paintinglist.component";
import {ArtistlistComponent} from "./components/artistlist/artistlist.component";
import {ComposerlistComponent} from "./components/composerlist/composerlist.component";
import {PodcastlistComponent} from "./components/podcastlist/podcastlist.component";
import {ExerciselistComponent} from "./components/exerciselist/exerciselist.component";
import {MealplanlistComponent} from "./components/mealplanlist/mealplanlist.component";
import {BudgetlistComponent} from "./components/budgetlist/budgetlist.component";
import {PresentationlistComponent} from "./components/presentationlist/presentationlist.component";
import {TourlistComponent} from "./components/tourlist/tourlist.component";
import {EventlistComponent} from "./components/eventlist/eventlist.component";
import {DevelopertoollistComponent} from "./components/developertoollist/developertoollist.component";
import {FrameworklistComponent} from "./components/frameworklist/frameworklist.component";
import {LibrarylistComponent} from "./components/librarylist/librarylist.component";



const routes: Route[] = [
  {path: 'Studentlist', component: StudentlistComponent},
  {path: 'Employeelist', component: EmployeelistComponent},
  {path: 'Fruitlist', component: FruitlistComponent},
  {path: 'Courselist', component: CourselistComponent},
  {path: 'Booklist', component: BooklistComponent},
  {path: 'Citylist', component: CitylistComponent},
  {path: 'Movielist', component: MovielistComponent},
  {path: 'Carmodellist', component: CarmodellistComponent},
  {path: 'Productlist', component: ProductlistComponent},
  {path: 'Subjectlist', component: SubjectlistComponent},
  {path: 'Countrylist', component: CountrylistComponent},
  {path: 'Sportslist', component: SportslistComponent},
  {path: 'Vegetablelist', component: VegetablelistComponent},
  {path: 'Animallist', component: AnimallistComponent},
  {path: 'Toollist', component: ToollistComponent},
  {path: 'Languagelist', component: LanguagelistComponent},
  {path: 'Gamelist', component: GamelistComponent},
  {path: 'Softwarelist', component: SoftwarelistComponent},
  {path: 'Phonecontactlist', component: PhonecontactlistComponent},
  {path: 'Musicplaylist', component: MusicplaylistsComponent},
  {path: 'Foodmenulist', component: FoodmenulistComponent},
  {path: 'Grocerylist', component: GrocerylistComponent},
  {path: 'Classroomlist', component: ClassroomlistComponent},
  {path: 'Inventorylist', component: InventorylistComponent},
  {path: 'Lecturelist', component: LecturelistComponent},
  {path: 'Stationerylist', component: StationerylistComponent},
  {path: 'Flowerlist', component: FlowerlistComponent},
  {path: 'Destinationlist', component: DestinationlistComponent},
  {path: 'Laptoplist', component: LaptoplistComponent},
  {path: 'Laptopspecificationlist', component: LaptopspecificationlistComponent},
  {path: 'Computerhardwarelist', component: ComputerhardwarelistComponent},
  {path: 'Mobileapplist', component: MobileapplistComponent},
  {path: 'Videolist', component: VideolistComponent},
  {path: 'Tvshowlist', component: TvshowlistComponent},
  {path: 'Furniturelist', component: FurniturelistComponent},
  {path: 'Accessorylist', component: AccessorylistComponent},
  {path: 'Buildinglist', component: BuildinglistComponent},
  {path: 'Paintinglist', component: PaintinglistComponent},
  {path: 'Artistlist', component: ArtistlistComponent},
  {path: 'Composerlist', component: ComposerlistComponent},
  {path: 'Podcastlist', component: PodcastlistComponent},
  {path: 'Exerciselist', component: ExerciselistComponent},
  {path: 'Mealplanlist', component: MealplanlistComponent},
  {path: 'Budgetlist', component: BudgetlistComponent},
  {path: 'Presentationlist', component: PresentationlistComponent},
  {path: 'Tourlist', component: TourlistComponent},
  {path: 'Eventlist', component: EventlistComponent},
  {path: 'Developertoollist', component: DevelopertoollistComponent},
  {path: 'Frameworklist', component: FrameworklistComponent},
  {path: 'Librarylist', component: LibrarylistComponent},

]

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],

  declarations: [
    AppComponent,
    StudentlistComponent,
    EmployeelistComponent,
    FruitlistComponent,
    CourselistComponent,
    BooklistComponent,
    CitylistComponent,
    MovielistComponent,
    CarmodellistComponent,
    ProductlistComponent,
    SubjectlistComponent,
    CountrylistComponent,
    SportslistComponent,
    VegetablelistComponent,
    AnimallistComponent,
    ToollistComponent,
    LanguagelistComponent,
    GamelistComponent,
    SoftwarelistComponent,
    PhonecontactlistComponent,
    MusicplaylistsComponent,
    FoodmenulistComponent,
    GrocerylistComponent,
    ClassroomlistComponent,
    InventorylistComponent,
    LecturelistComponent,
    StationerylistComponent,
    FlowerlistComponent,
    DestinationlistComponent,
    LaptoplistComponent,
    LaptopspecificationlistComponent,
    ComputerhardwarelistComponent,
    MobileapplistComponent,
    VideolistComponent,
    TvshowlistComponent,
    FurniturelistComponent,
    AccessorylistComponent,
    BuildinglistComponent,
    PaintinglistComponent,
    ArtistlistComponent,
    ComposerlistComponent,
    PodcastlistComponent,
    ExerciselistComponent,
    MealplanlistComponent,
    BudgetlistComponent,
    PresentationlistComponent,
    TourlistComponent,
    EventlistComponent,
    DevelopertoollistComponent,
    FrameworklistComponent,
    LibrarylistComponent
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ],
})

export class AppModule {}



