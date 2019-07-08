import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewIssueComponent, ISSUE_COMPONENTS } from '../../shared/view-issue/view-issue.component';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  issueId: number;

  readonly issue_components: ISSUE_COMPONENTS[] = [
    ISSUE_COMPONENTS.TESTER_POST,
    ISSUE_COMPONENTS.SEVERITY_LABEL,
    ISSUE_COMPONENTS.TYPE_LABEL
  ];

  @ViewChild(ViewIssueComponent) viewIssue: ViewIssueComponent;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.issueId = +params['issue_id'];
      }
    );
  }

  canDeactivate() {
    return this.viewIssue.isEditing();
  }

}
