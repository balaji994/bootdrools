package project.model;

public class CreditScore {
    private String message;
    private int cScore;



    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public int getcScore(){
        return cScore;
    }

    public void setcScore(int cScore) {
        this.cScore = cScore;
    }
}
