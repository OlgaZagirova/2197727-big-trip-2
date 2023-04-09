import EventsView from '../view/trip-events-view.js';
import RoutePointView from '../view/route-point-view.js';
import EditingFormView from '../view/editing-form-view.js';
import SortingView from '../view/sorting-view.js';
import { render } from '../render.js';

export default class TripEventsPresenter {
  constructor(tripContainer) {
    this.eventsList = new EventsView();
    this.tripContainer = tripContainer;
  }

  init () {
    render(new SortingView(), this.tripContainer);
    render(this.eventsList, this.tripContainer);
    render(new EditingFormView(), this.eventsList.getElement());

    for (let i = 0; i < 3; i++){
      render(new RoutePointView(), this.eventsList.getElement());
    }
  }
}
