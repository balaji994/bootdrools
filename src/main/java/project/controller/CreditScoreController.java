package project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import project.service.CreditScoreService;
import project.model.CreditScore;


@RestController
public class CreditScoreController {

    private final CreditScoreService creditScoreService;

    @Autowired
    public CreditScoreController(CreditScoreService creditScoreService) {
        this.creditScoreService = creditScoreService;
    }

    @RequestMapping(value = "/getMessage", method = RequestMethod.GET, produces = "application/json")
    public CreditScore getQuestions(@RequestParam(required = true) int cScore) {

        CreditScore creditScore = new CreditScore();
        creditScore.setcScore(cScore);
        creditScoreService.getCreditScore(creditScore);
        return creditScore;
    }
}
