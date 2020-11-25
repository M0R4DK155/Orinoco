class LifeCycle {
    die() { };
    mounted() {
        if( this.whenMounted !== undefined ) this.whenMounted();
    }

    unmounted(){
      if( this.whenUnmounted !== undefined ) this.whenUnmounted();
    }

    //Observateur de mutations DOM


};
