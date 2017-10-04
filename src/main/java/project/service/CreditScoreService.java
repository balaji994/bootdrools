package project.service;

import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.model.CreditScore;

@Service
public class CreditScoreService {

    private final KieContainer kieContainer;

    @Autowired
    public CreditScoreService(KieContainer kieContainer) {
        this.kieContainer = kieContainer;
    }

    public CreditScore getCreditScore(CreditScore creditScore) {
        //get the stateful session
        KieSession kieSession = kieContainer.newKieSession("rulesSession");
        kieSession.insert(creditScore);
        kieSession.fireAllRules();
        kieSession.dispose();
        return creditScore;
    }
}
