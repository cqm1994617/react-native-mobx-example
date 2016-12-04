import { observable, action } from 'mobx';

class TimerStore {
  @observable timer = 0;

  @action addTimer = () => {
    this.timer ++;
  };
  @action subTimer = () => {
    this.timer --;
  };
}

const timer = new TimerStore();
export default timer;
